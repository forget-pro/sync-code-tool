import axios from "axios"
import fs from "fs"
import path from "path"
import dayjs from "dayjs"
import { createRequire } from 'node:module'
import compressing from "compressing";
import { BrowserWindow, app } from "electron"
import { spawnSync, spawn } from "child_process"
import * as iconv from 'iconv-lite'

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
        if (!fs.existsSync(this.app_dir)) {
            fs.mkdirSync(this.app_dir, { recursive: true });
        }
        // 读取配置文件 没有则创建
        if (!fs.existsSync(this.configPath)) {
            fs.writeFileSync(this.configPath, JSON.stringify({}, null, 4), 'utf8')
        }

        this.readConfig();
    }

    // 上报配置
    public reportConfig = () => {
        this.windown.webContents.send('init', { ...this.runConfig, version: app.getVersion() });
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
        this.runConfig = data; // 更新当前配置
        this.reportConfig()
        return data
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

            // 格式化项目路径
            const normalizedProjectPath = path.normalize(path.resolve(projectPath));

            const result = await minidev.startIde({
                project: normalizedProjectPath,
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

        // 格式化项目路径
        const normalizedProjectPath = path.normalize(path.resolve(projectPath));

        // 在 Windows 上设置代码页为 UTF-8
        const isWindows = process.platform === 'win32';
        // 只在 Windows 上对路径进行引号包装，处理空格问题
        const quotedCmd = isWindows ? `"${cmd}"` : cmd;
        const quotedProjectPath = isWindows ? `"${normalizedProjectPath}"` : normalizedProjectPath;
        const fullCommand = `${quotedCmd} open --project ${quotedProjectPath}`;

        const commandToRun = isWindows ? 'cmd' : 'sh';
        const spawnArgs = isWindows
            ? ['/c', `chcp 936 && ${fullCommand}`]  // 使用 GBK 代码页 936
            : ['-c', fullCommand];

        // 使用 spawn 来支持交互式输入
        const child = spawn(commandToRun, spawnArgs, {
            shell: true,
            timeout: 10000,
            // 继承父进程的环境变量
            env: {
                ...process.env,
                PATH: process.env.PATH,
                // 在 Windows 上强制设置编码环境变量
                ...(isWindows && {
                    CHCP: '936',  // 使用 GBK 代码页
                    LANG: 'zh_CN.GBK',
                    LC_ALL: 'zh_CN.GBK',
                    PYTHONIOENCODING: 'gbk',
                    // 强制控制台输出编码
                    CONSOLE_OUTPUT_CP: '936'
                })
            },
            // 设置工作目录
            cwd: process.cwd(),
            // Windows 特定选项
            ...(isWindows && {
                windowsVerbatimArguments: false,
                windowsHide: false
            })
        });

        let outputBuffer = '';

        // 监听标准输出
        child.stdout?.on('data', (data: Buffer) => {
            // 调试编码（仅在开发环境下）
            if (process.env.NODE_ENV === 'development') {
                this.debugEncoding(data, 'stdout');
            }

            const output = this.decodeBuffer(data);
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
        child.stderr?.on('data', (data: Buffer) => {
            // 调试编码（仅在开发环境下）
            if (process.env.NODE_ENV === 'development') {
                this.debugEncoding(data, 'stderr');
            }

            const error = this.decodeBuffer(data);
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

    // 启动微信开发者工具 - 备用方法 (不使用 shell)
    public startWeChatDevToolDirect = (projectPath: string) => {
        const cmd = this.runConfig.wechat
        if (!fs.existsSync(cmd)) {
            return this.sendLog('微信开发者工具路径不存在，请打开设置配置微信开发者工具路径', 'error');
        }

        // 格式化项目路径
        const normalizedProjectPath = path.normalize(path.resolve(projectPath));

        this.sendLog(`🚀 直接执行命令: ${cmd} open --project ${normalizedProjectPath}`);

        const isWindows = process.platform === 'win32';

        // 直接使用 spawn，不通过 shell
        const child = spawn(cmd, ['open', '--project', normalizedProjectPath], {
            shell: false,
            timeout: 10000,
            env: {
                ...process.env,
                PATH: process.env.PATH,
                // 在 Windows 上强制设置编码相关环境变量
                ...(isWindows && {
                    CHCP: '936',  // 使用 GBK 代码页
                    LANG: 'zh_CN.GBK',
                    LC_ALL: 'zh_CN.GBK',
                    PYTHONIOENCODING: 'gbk',
                    CONSOLE_OUTPUT_CP: '936'
                })
            },
            cwd: process.cwd(),
            // Windows 特定选项
            ...(isWindows && {
                windowsVerbatimArguments: false,
                windowsHide: false
            })
        });

        let outputBuffer = '';

        // 监听标准输出
        child.stdout?.on('data', (data: Buffer) => {
            const output = this.decodeBuffer(data);
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
                }, 100);
            }
        });

        // 监听错误输出
        child.stderr?.on('data', (data: Buffer) => {
            const error = this.decodeBuffer(data);
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
                this.sendLog('微信开发者工具进程被终止');
            } else {
                this.sendLog(`微信开发者工具启动失败，退出码: ${code}`, 'error');
            }
        });

        // 监听进程错误
        child.on('error', (error: any) => {
            if (error.code === 'TIMEOUT') {
                this.sendLog('微信开发者工具启动超时', 'error');
            } else if (error.code === 'ENOENT') {
                this.sendLog('找不到微信开发者工具可执行文件', 'error');
            } else {
                this.sendLog(`启动微信开发者工具时发生错误: ${error.message}`, 'error');
            }
        });
    }

    // 启动项目
    public startDevTool = (type: string, projectPath: string) => {
        const basePath = path.dirname(projectPath)
        const projectPathFull = path.join(basePath);
        if (!fs.existsSync(projectPathFull)) {
            return this.sendLog(`项目路径不存在: ${projectPathFull}`, 'error');
        }
        if (type == 'wechat') {
            // 在 macOS 上尝试直接执行方法
            if (process.platform === 'darwin') {
                this.startWeChatDevToolDirect(projectPathFull);
            } else {
                this.startWeChatDevTool(projectPathFull);
            }
            return
        }
        this.startAlipayDevTool(projectPathFull);
    }

    // 异步启动命令并实时捕获输出 (适用于长时间运行的进程)
    public spawnCommandWithLogs = (command: string, args: string[], options: any = {}) => {
        return new Promise<boolean>((resolve, reject) => {
            this.sendLog(`🚀 执行命令: ${command} ${args.join(' ')}`);

            const isWindows = process.platform === 'win32';

            const child = spawn(command, args, {
                shell: true,
                env: {
                    ...process.env,
                    // 在 Windows 上强制设置编码相关环境变量
                    ...(isWindows && {
                        CHCP: '936',  // 使用 GBK 代码页
                        LANG: 'zh_CN.GBK',
                        LC_ALL: 'zh_CN.GBK',
                        PYTHONIOENCODING: 'gbk',
                        CONSOLE_OUTPUT_CP: '936'
                    })
                },
                // Windows 特定选项
                ...(isWindows && {
                    windowsVerbatimArguments: false,
                    windowsHide: false
                }),
                ...options
            });

            // 捕获标准输出
            child.stdout?.on('data', (data: Buffer) => {
                const output = this.decodeBuffer(data);
                const cleanOutput = output.trim();
                if (cleanOutput) {
                    this.sendLog(`📝 输出: ${cleanOutput}`);
                }
            });

            // 捕获错误输出
            child.stderr?.on('data', (data: Buffer) => {
                const error = this.decodeBuffer(data);
                const cleanError = error.trim();
                if (cleanError) {
                    this.sendLog(`⚠️ 错误: ${cleanError}`, 'error');
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

        // 格式化项目路径
        const normalizedProjectPath = path.normalize(path.resolve(projectPath));

        // 根据平台选择shell和路径格式
        const isWindows = process.platform === 'win32';
        // 只在 Windows 上添加引号处理空格
        const quotedCmd = isWindows ? `"${cmd}"` : cmd;
        const quotedProjectPath = isWindows ? `"${normalizedProjectPath}"` : normalizedProjectPath;
        const fullCommand = `${quotedCmd} open --project ${quotedProjectPath}`;

        const shellCommand = isWindows ? 'cmd' : 'sh';
        const shellArgs = isWindows ? ['/c', fullCommand] : ['-c', fullCommand];

        const success = await this.spawnCommandWithLogs(shellCommand, shellArgs, {
            timeout: 10000
        });

        return success;
    }



    // 清理 ANSI 转义序列的工具函数
    private cleanAnsiCodes(text: string): string {
        if (!text || typeof text !== 'string') {
            return '';
        }

        return text
            .replace(/\x1b\[[0-9;]*[mGKHfJ]/g, '') // 清理颜色和格式控制
            .replace(/\x1b\[[0-9]*[ABCD]/g, '')    // 清理光标移动控制
            .replace(/\x1b\[[0-9]*[H]/g, '')       // 清理光标定位
            .replace(/\x1b\[2J/g, '')              // 清理清屏
            .replace(/\x1b\[K/g, '')               // 清理清行
            .replace(/\r\n/g, '\n')                // 统一换行符
            .replace(/\r/g, '\n')                  // 处理单独的 \r
            .trim();
    }

    // 处理 Windows 编码问题的辅助方法
    private decodeWindowsOutput(buffer: Buffer): string {
        const isWindows = process.platform === 'win32';
        if (isWindows) {
            try {
                // 使用 GBK 解码
                return iconv.decode(buffer, 'gbk');
            } catch (error) {
                // 如果解码失败，使用默认的 UTF-8 解码
                return buffer.toString('utf8');
            }
        }
        return buffer.toString('utf8');
    }

    // 统一的编码转换辅助方法 - 增强版
    private decodeBuffer(data: Buffer): string {
        const isWindows = process.platform === 'win32';

        if (!isWindows) {
            return data.toString('utf8');
        }

        // Windows 平台增强编码处理
        try {
            // 首先检查是否为 ASCII 文本
            if (this.isAsciiBuffer(data)) {
                return data.toString('ascii');
            }

            // 使用字节序列分析来判断最可能的编码
            const possibleEncoding = this.detectEncoding(data);

            // 根据检测结果尝试解码
            if (possibleEncoding) {
                try {
                    const result = iconv.decode(data, possibleEncoding);
                    if (result && !result.includes('\uFFFD')) {
                        return result;
                    }
                } catch (e) {
                    console.log(`使用 ${possibleEncoding} 解码失败:`, e.message);
                }
            }

            // 按优先级尝试常用编码
            const encodings = ['cp936', 'gbk', 'gb2312', 'gb18030', 'utf8', 'ascii'];

            for (const encoding of encodings) {
                try {
                    const result = iconv.decode(data, encoding);
                    // 检查解码结果是否包含替换字符，如果没有则认为解码成功
                    if (result && !result.includes('\uFFFD')) {
                        return result;
                    }
                } catch (e) {
                    continue;
                }
            }

            // 最后尝试原始字符串转换
            return data.toString('utf8');
        } catch (error) {
            console.error('编码转换完全失败:', error);
            return data.toString('utf8');
        }
    }

    // 检测是否为 ASCII 缓冲区
    private isAsciiBuffer(buffer: Buffer): boolean {
        for (let i = 0; i < buffer.length; i++) {
            if (buffer[i] > 127) {
                return false;
            }
        }
        return true;
    }

    // 简单的编码检测
    private detectEncoding(buffer: Buffer): string | null {
        // 检查 UTF-8 BOM
        if (buffer.length >= 3 &&
            buffer[0] === 0xEF &&
            buffer[1] === 0xBB &&
            buffer[2] === 0xBF) {
            return 'utf8';
        }

        // 统计字节分布来推测编码
        let highByteCount = 0;
        let possibleGbkPairs = 0;

        for (let i = 0; i < buffer.length - 1; i++) {
            const byte1 = buffer[i];
            const byte2 = buffer[i + 1];

            if (byte1 > 127) {
                highByteCount++;
            }

            // GBK 字符范围检测
            if ((byte1 >= 0x81 && byte1 <= 0xFE) &&
                (byte2 >= 0x40 && byte2 <= 0xFE && byte2 !== 0x7F)) {
                possibleGbkPairs++;
            }
        }

        // 如果有很多可能的 GBK 字符对，优先使用 GBK 相关编码
        if (possibleGbkPairs > 0) {
            return 'cp936';  // Windows 中文代码页
        }

        // 如果有高位字节但不是 GBK 模式，可能是 UTF-8
        if (highByteCount > 0) {
            return 'utf8';
        }

        return null;
    }

    // 调试编码的辅助方法
    private debugEncoding(buffer: Buffer, label: string = ''): void {
        if (process.platform !== 'win32') return;

        console.log(`=== 编码调试 ${label} ===`);
        console.log('原始 Buffer:', buffer);
        console.log('Buffer 长度:', buffer.length);
        console.log('Buffer hex:', buffer.toString('hex'));

        const encodings = ['utf8', 'gbk', 'gb2312', 'gb18030', 'cp936'];
        encodings.forEach(encoding => {
            try {
                const decoded = iconv.decode(buffer, encoding);
                console.log(`${encoding}:`, decoded);
            } catch (e) {
                console.log(`${encoding}: 解码失败`);
            }
        });
        console.log('=== 编码调试结束 ===');
    }

    // 测试编码转换的公共方法
    public testEncoding = (testText: string = '测试中文编码') => {
        this.sendLog('=== 编码测试开始 ===');

        // 创建测试缓冲区
        const utf8Buffer = Buffer.from(testText, 'utf8');
        const gbkBuffer = iconv.encode(testText, 'gbk');

        this.sendLog(`原始文本: ${testText}`);
        this.sendLog(`UTF-8 Buffer: ${utf8Buffer.toString('hex')}`);
        this.sendLog(`GBK Buffer: ${gbkBuffer.toString('hex')}`);

        // 测试解码
        this.sendLog('--- 解码测试 ---');
        this.sendLog(`UTF-8 -> decodeBuffer: ${this.decodeBuffer(utf8Buffer)}`);
        this.sendLog(`GBK -> decodeBuffer: ${this.decodeBuffer(gbkBuffer)}`);

        this.sendLog('=== 编码测试结束 ===');
    }

}