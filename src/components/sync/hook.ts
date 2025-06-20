import { useState } from "@/hooks/use-state"
import { useMessage } from 'naive-ui'
import axios from "axios";
import dayjs from "dayjs"
interface Istate {
    appletList: { label: string, value: string, appid: string; wechat_url: string, alipay_url: string }[],
    appletVaule?: string,
    devToolType: string;
    logs?: { text: string, type: string, time: string, id: string; }[]
    syncing?: boolean;
    refreshing: boolean;
    drawerOpen?: boolean;
    form: {
        wechat: string;
        alipay: string;
        proxy_url: string;
    }
}
export default function useHookData() {
    const message = useMessage()
    const { state, setState } = useState<Istate>({
        appletList: [],
        appletVaule: '',
        devToolType: 'wechat',
        logs: [],
        syncing: false,
        refreshing: false,
        drawerOpen: false,
        form: {
            wechat: '',
            alipay: '',
            proxy_url: '',
        }
    })

    const devTools = [{
        label: '微信开发者工具',
        value: 'wechat'
    },
    {
        label: '支付宝开发者工具',
        value: 'alipay'
    }
    ]

    // 获取小程序列表
    const getAppletList = async () => {
        try {
            state.refreshing = true
            const res = await axios.get('https://hyjqosstest.oss-cn-shenzhen.aliyuncs.com/applet-code/applet.config.json?t=' + Date.now());
            state.appletList = res.data
            state.appletVaule = res.data[0]?.value; // 默认选中第一个小程序
        } finally {
            state.refreshing = false;
        }
    }

    // 设置logs
    const setLogs = (text: string, type: string = 'info') => {
        const time = dayjs().unix()
        state.logs?.unshift({ text, type, id: `${Math.random() + time}`, time: dayjs().format('YYYY-MM-DD HH:mm:ss') });
    }

    const startSync = async () => {
        try {
            if (!state.appletVaule) {
                setLogs(`请选择需要同步的小程序项目`, 'error');
                return
            }
            const item = state.appletList.find(item => item.value === state.appletVaule);
            if (!item) {
                setLogs(`未找到对应的小程序项目,请联系管理员`, 'error');
                return
            }
            state.syncing = true
            const url = state.devToolType == 'wechat' ? item.wechat_url : item.alipay_url
            if (!url) {
                message.error(`该小程序暂无${state.devToolType == 'wechat' ? '微信' : '支付宝'}版本，请联系管理员`);
                setLogs(`该小程序暂无${state.devToolType == 'wechat' ? '微信' : '支付宝'}版本，请联系管理员`, 'error');
                return
            }
            setLogs(`开始同步${state.devToolType == 'wechat' ? '微信' : '支付宝'}小程序代码`, 'info');

            // 下载小程序代码
            const result = await window.ipcRenderer.invoke('downloadFile', {
                url: url,
                type: state.devToolType,
                appid: item.appid,
            })
            if (result.result) {
                // 解压小程序代码
                setLogs(`小程序代码空投，投放成功,开始舔包 😋😋😋😋`);
                const unzipResult = await window.ipcRenderer.invoke('unzipFile', {
                    filepath: result.path,
                });
                if (unzipResult) {
                    const status = await window.ipcRenderer.invoke('DevToolsOpen', {
                        type: state.devToolType,
                        url: result.path
                    })
                }

            }
        } finally {
            state.syncing = false;
        }


    }

    return {
        state, setState, devTools, setLogs, startSync, getAppletList
    }
}