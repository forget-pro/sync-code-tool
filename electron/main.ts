import { app, BrowserWindow, ipcMain, shell } from 'electron'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { DevTools } from "./dev-tool"
import { ElectronUpdate } from "./update";
import fs from 'node:fs'
import path from 'node:path'

const require = createRequire(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url))

process.env.APP_ROOT = path.join(__dirname, '..')

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']
export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron')
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist')

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, 'public') : RENDERER_DIST

let win: BrowserWindow | null
let devTools: DevTools | null = null
let electronUpdate: ElectronUpdate | null = null


function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 1200,
    minHeight: 800,
    icon: path.join(process.env.VITE_PUBLIC || '', 'electron-vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
    },
  })
  devTools = new DevTools(win)
  electronUpdate = new ElectronUpdate(win);

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    // win?.webContents.send('main-process-message', (new Date).toLocaleString())
    electronUpdate?.checkElectronUpdate(); // 检测更新
    devTools?.reportConfig()
    devTools?.sendLog('🚀 初始化成功')
  })


  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
    // Open devTool if in development.
    win.webContents.openDevTools()
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(RENDERER_DIST, 'index.html'))
  }
}
// 注册事件
ipcMain.handle('downloadFile', async (_, data) => {
  const app_dir = path.join(app.getPath("documents"), "code-sync")
  const filepath = path.join(app_dir, `${data.type}/${data.appid}`)
  // 判断文件夹是否存在
  if (!fs.existsSync(filepath)) {
    fs.mkdirSync(filepath, { recursive: true });
  }

  const dest = path.join(filepath, 'code.tar.gz')

  const result = await devTools?.downloadFile(data.url, dest)

  return {
    path: dest,
    result
  }

})

// 注册解压事件
ipcMain.handle('unzipFile', async (_, data) => {
  return await devTools?.unzipFile(data.filepath, path.dirname(data.filepath))
})



// 启动项目
ipcMain.handle('DevToolsOpen', async (_, data) => {
  devTools?.startDevTool(data.type, data.url)
})

ipcMain.handle('open:url', (_, url) => {
  shell.openExternal(url); // 打开链接
})

ipcMain.handle('saveConfig', (_, data) => {
  devTools?.writeConfig(data);
})


// 清理 ANSI 转义序列的函数
const cleanAnsiCodes = (text: string): string => {
  // 移除所有 ANSI 转义序列
  return text
    .replace(/\x1b\[[0-9;]*m/g, '')     // 颜色代码 如 \x1b[31m
    .replace(/\x1b\[[0-9]*[A-Za-z]/g, '') // 光标控制代码 如 \x1b[2K, \x1b[G
    .replace(/\x1b\[[0-9]*;[0-9]*[A-Za-z]/g, '') // 复合控制代码
    .replace(/\x1b\[[?][0-9]*[a-zA-Z]/g, '') // 问号开头的代码
    .replace(/\x1b\][0-9]*;.*?\x07/g, '') // OSC 序列
    .replace(/\r\n/g, '\n')             // 统一换行符
    .replace(/\r/g, '\n')               // 回车符转换为换行
    .trim()
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.whenReady().then(createWindow)
