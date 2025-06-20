import axios from "axios"
import fs from "fs"
import path from "path"
import dayjs from "dayjs"
import { createRequire } from 'node:module'
import compressing from "compressing";
import { BrowserWindow, app } from "electron"
import { spawnSync, spawn } from "child_process"

// 使用动态导入 minidev
let minidev: any;
const initMinidev = async () => {
    if (!minidev) {
        const require = createRequire(import.meta.url);
        minidev = require('minidev');
    }
    return minidev;
};

export class DevTools {
    public windown: BrowserWindow;
    public app_dir = path.join(app.getPath("documents"), "code-sync");
    public configPath = path.join(this.app_dir, 'config.json');
    public runConfig: any

    constructor(win: BrowserWindow) {
        this.windown = win;
        // 读取配置文件 没有则创建
        if (!fs.existsSync(this.configPath)) {
            fs.writeFileSync(this.configPath, JSON.stringify({}, null, 4), 'utf8')
        }

        this.readConfig();
    }

    // 上报配置
    public reportConfig = () => {
        this.windown.webContents.send('init', this.runConfig);
    }

    // 增强的日志方法 (同时发送到UI和写入文件)
    public sendLog(text: string, type = 'default') {
        const time = dayjs().unix()

        // 发送到UI
        this.windown.webContents.send('logs', {
            text, type, id: `${Math.random() + time}`, time: dayjs().format('YYYY-MM-DD HH:mm:ss')
        });

    }



    // 下载文件
    downloadFile = async (url: string, dest: string): Promise<boolean> => {

        const writer = fs.createWriteStream(dest);
        try {
            this.sendLog('🚀 即将开始下载代码包.......');
            const download = await axios({
                method: "get",
                url: url,
                responseType: "stream",
                timeout: 12000,
            });
            download.data.pipe(writer);
            return await new Promise((resolve, reject) => {
                writer.on("finish", async () => {
                    this.sendLog("代码包下载完成,空投已正确投放 🔥");
                    resolve(true);
                });
                writer.on("error", reject);
            });
        } catch (error: any) {
            await writer.close();
            this.sendLog(` 😈 下载失败:${error.message}，特种兵半路被击毙...`, "error");
            fs.unlinkSync(dest);
            return false;
        }
    }
    // 解压文件
    unzipFile = async (filePath: string, dest: string): Promise<boolean> => {
        this.sendLog("开始打开空投 🎁🎁🎁🎁");
        try {
            await compressing.tgz.uncompress(filePath, dest, { overwrite: true })
            const guns = ['MG3', 'AWM', 'AMR', 'M200', 'GRZRA', 'AUG', 'P90'];
            const gun = guns[Math.floor(Math.random() * guns.length)];
            this.sendLog(`🤩 空投里面居然有${gun},大吉大利今晚肯定吃鸡 🐔`);
            fs.unlinkSync(filePath); // 删除压缩包
            return true
        } catch (err) {
            this.sendLog(`舔包失败，被老六蹲了: ${err.message}`, 'error');
            fs.unlinkSync(filePath);
            return false;
        }
    }

    // 获取默认开发者工具路径
    public getDefaultDevToolPath = () => {
        const platform = process.platform;
        const devToolPaths = {
            darwin: {
                wechat: '/Applications/wechatwebdevtools.app/Contents/MacOS/cli',
                alipay: '/Applications/小程序开发者工具.app'
            },
            win32: {
                wechat: 'C:\\Program Files (x86)\\Tencent\\微信web开发者工具\\cli.bat',
                alipay: 'C:\\Program Files\\Program Files\\小程序开发者工具'
            }
        }
        return devToolPaths[platform]
    }

    // 读取配置文件
    public readConfig = () => {
        const params = this.getDefaultDevToolPath()
        const base_config = { proxy_url: 'https://gh-proxy.com', ...params }
        if (fs.existsSync(this.configPath)) {
            const config = fs.readFileSync(this.configPath, 'utf8');
            const json = JSON.parse(config);
            this.runConfig = { ...base_config, ...json };
        } else {
            this.runConfig = base_config
        }
        this.writeConfig(this.runConfig)
        return this.runConfig;
    }

    // 写入配置文件
    public writeConfig = (data: any) => {
        fs.writeFileSync(this.configPath, JSON.stringify(data, null, 4), 'utf8');
        this.sendLog('配置文件已更新');
        this.reportConfig()
    }

    // 启动支付宝
    public startAlipayDevTool = async (projectPath: string) => {
        try {
            const cmd = this.runConfig.alipay
            if (!fs.existsSync(cmd)) {
                return this.sendLog('支付宝开发者工具路径不存在，请打开设置配置支付宝开发者工具路径', 'error');
            }
            const { minidev } = await initMinidev();
            console.log(minidev, 144)
            const result = await minidev.startIde({
                project: projectPath,
                appPath: cmd,
            })
            this.sendLog(`支付宝开发者工具启动成功`);
        } catch (error: any) {
            this.sendLog(`启动支付宝开发者工具时发生错误: ${error.message}`, 'error');
        }

    }

    // 启动微信开发者工具
    public startWeChatDevTool = (projectPath: string) => {
        const cmd = this.runConfig.wechat
        if (!fs.existsSync(cmd)) {
            return this.sendLog('微信开发者工具路径不存在，请打开设置配置微信开发者工具路径', 'error');
        }

        // 使用 spawn 来支持交互式输入
        const child = spawn(cmd, ['open', '--project', projectPath], {
            shell: true,
            timeout: 10000,
        });

        let outputBuffer = '';

        // 监听标准输出
        child.stdout?.on('data', (data) => {
            const output = data.toString();
            outputBuffer += output;

            // 过滤掉 ANSI 转义序列
            const cleanOutput = this.cleanAnsiCodes(output);

            if (cleanOutput) {
                this.sendLog(cleanOutput);
            }

            // 检测是否需要启用 IDE Service
            if (output.includes('Enable IDE Service')) {
                setTimeout(() => {
                    child.stdin?.write('y\n');
                }, 100); // 稍微延迟一下确保提示完全显示
            }
        });

        // 监听错误输出
        child.stderr?.on('data', (data) => {
            const error = data.toString();
            // 过滤掉 ANSI 转义序列
            const cleanError = this.cleanAnsiCodes(error);

            if (cleanError) {
                this.sendLog(cleanError, 'error');
            }
        });

        // 监听进程结束
        child.on('close', (code, signal) => {
            if (code === 0) {
                this.sendLog('微信开发者工具启动成功');
            } else if (code === null) {

            } else {
                this.sendLog(`微信开发者工具启动失败，退出码: ${code}`, 'error');
            }
        });


        // 监听进程错误
        child.on('error', (error: any) => {
            if (error.code === 'TIMEOUT') {
                this.sendLog('微信开发者工具启动超时', 'error');
            } else {
                this.sendLog(`启动微信开发者工具时发生错误: ${error.message}`, 'error');
            }
        });
    }

    // 启动项目
    public startDevTool = (type: string, projectPath: string) => {
        const basePath = path.dirname(projectPath)
        const devfolder = type === 'wechat' ? 'mp-weixin' : 'mp-alipay';
        const projectPathFull = path.join(basePath, 'dist', 'build', devfolder);
        if (!fs.existsSync(projectPathFull)) {
            return this.sendLog(`项目路径不存在: ${projectPathFull}`, 'error');
        }
        if (type == 'wechat') {
            this.startWeChatDevTool(projectPathFull);
            return
        }
        this.startAlipayDevTool(projectPathFull);
    }

    // 异步启动命令并实时捕获输出 (适用于长时间运行的进程)
    public spawnCommandWithLogs = (command: string, args: string[], options: any = {}) => {
        return new Promise<boolean>((resolve, reject) => {
            this.sendLog(`🚀 执行命令: ${command} ${args.join(' ')}`);

            const child = spawn(command, args, {
                shell: true,
                ...options
            });

            // 捕获标准输出
            child.stdout?.on('data', (data) => {
                const output = data.toString().trim();
                if (output) {
                    this.sendLog(`📝 输出: ${output}`);
                }
            });

            // 捕获错误输出
            child.stderr?.on('data', (data) => {
                const error = data.toString().trim();
                if (error) {
                    this.sendLog(`⚠️ 错误: ${error}`, 'error');
                }
            });

            // 进程结束
            child.on('close', (code) => {
                if (code === 0) {
                    this.sendLog(`✅ 命令执行完成`);
                    resolve(true);
                } else {
                    this.sendLog(`❌ 命令执行失败，退出码: ${code}`, 'error');
                    resolve(false);
                }
            });

            // 进程错误
            child.on('error', (error) => {
                this.sendLog(`❌ 进程启动失败: ${error.message}`, 'error');
                reject(error);
            });

            // 超时处理
            if (options.timeout) {
                setTimeout(() => {
                    child.kill();
                    this.sendLog(`⏰ 命令执行超时，已终止进程`, 'error');
                    resolve(false);
                }, options.timeout);
            }
        });
    }

    // 异步启动微信开发者工具 (如果需要实时输出)
    public startWeChatDevToolAsync = async (projectPath: string) => {
        const cmd = this.runConfig.wechat
        if (!fs.existsSync(cmd)) {
            return this.sendLog('微信开发者工具路径不存在，请打开设置配置微信开发者工具路径', 'error');
        }

        const success = await this.spawnCommandWithLogs(cmd, ['open', '--project', projectPath], {
            timeout: 10000
        });

        return success;
    }



    // 清理 ANSI 转义序列的工具函数
    private cleanAnsiCodes(text: string): string {
        return text
            .replace(/\x1b\[[0-9;]*[mGKHfJ]/g, '') // 清理颜色和格式控制
            .replace(/\x1b\[[0-9]*[ABCD]/g, '')    // 清理光标移动控制
            .replace(/\x1b\[[0-9]*[H]/g, '')       // 清理光标定位
            .replace(/\x1b\[2J/g, '')              // 清理清屏
            .replace(/\x1b\[K/g, '')               // 清理清行
            .trim();
    }

}