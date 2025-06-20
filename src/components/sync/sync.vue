<template>
  <div class="h-screen flex flex-col p-6">
    <div class="text-2xl font-medium flex justify-between">
      <span>小程序代码同步工具</span>
      <div class="flex items-center cursor-pointer" @click="state.drawerOpen = true">
        <n-icon class="mr-4" color="#646cff" size="24">
          <Settings />
        </n-icon>
        <n-button type="primary" @click.stop="startSync" :loading="state.syncing">开始同步</n-button>
      </div>
    </div>
    <div class="bg-gray-100 rounded-xl p-6 mt-6">
      <div class="text-xl font-medium mb-6">配置信息</div>
      <div class="text-lg">
        <p class="mb-4">选择小程序项目</p>
        <div class="flex">
          <n-select :loading="state.refreshing" v-model:value="state.appletVaule" :options="state.appletList" />
          <div class="w-30 flex justify-end">
            <span class="mx-2"></span>
            <n-button class="ml-8" @click="refreshAppletList" :loading="state.refreshing">刷新</n-button>
          </div>
        </div>

        <p class="my-4">开发者工具类型</p>
        <n-radio-group v-model:value="state.devToolType" name="radiogroup">
          <n-space>
            <n-radio v-for="song in devTools" :key="song.value" :value="song.value">
              {{ song.label }}
            </n-radio>
          </n-space>
        </n-radio-group>
      </div>
    </div>

    <div class="flex-1 flex flex-col min-h-0">
      <div class="text-lg font-medium mt-6 flex justify-between">
        <span>同步日志</span>
        <span>清空日志</span>
      </div>
      <div class="bg-gray-700 p-6 rounded-xl flex-1 mt-4 min-h-0 relative">
        <div class="absolute inset-6 overflow-y-auto">
          <TransitionGroup name="log" tag="div">
            <p v-for="(item, i) in state.logs" :key="item.id" class="log-item mb-1 flex-shrink-0">
              <span class="text-gray-400">[{{ item.time }}]</span>
              <span class="ml-2" :class="item.type == 'error' ? 'text-red-400' : 'text-white'">{{ item.text }}</span>
            </p>
          </TransitionGroup>
        </div>
      </div>
    </div>
    <n-drawer v-model:show="state.drawerOpen" placement="bottom" height="350">
      <n-drawer-content title="设置">
        <n-form label-placement="left" label-width="170" ref="formRef" :model="state.form" :rules="rules">
          <n-form-item path="wechat" label="微信开发者工具路径">
            <div class="flex w-full">
              <n-input class="w-full mr-4" placeholder="请输入微信开发者工具路径" v-model:value="state.form.wechat" @keydown.enter.prevent />
              <n-button class="ml-4" type="primary" @click="state.drawerOpen = false">浏览</n-button>
            </div>
          </n-form-item>
          <n-form-item path="alipay" label="支付宝开发者工具路径">
            <div class="flex w-full">
              <n-input class="w-full mr-4" placeholder="请输入支付宝开发者工具路径" v-model:value="state.form.alipay" @keydown.enter.prevent />
              <n-button class="ml-4" type="primary" @click="state.drawerOpen = false">浏览</n-button>
            </div>
          </n-form-item>
          <n-form-item path="proxy_url" label="GIHUB代理地址">
            <n-input v-model:value="state.form.proxy_url" placeholder="请输入github代理地址" @keydown.enter.prevent />
          </n-form-item>
          <div>
            <span>访问URL获取更多代理地址:</span>
            <span class="text-blue-500 cursor-pointer ml-1" @click="openUrl('https://gh-proxy.com')">获取更多代理地址 </span>
          </div>
        </n-form>
        <template #footer>
          <n-button @click="state.drawerOpen = false">取消</n-button>
          <span class="mx-6"></span>
          <n-button type="primary" @click="handleValidateClick">保存</n-button>
        </template>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, toRaw } from 'vue'
import useHookData from './hook'
import type { FormInst } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { Settings } from '@vicons/ionicons5'
const { state, devTools, startSync, setLogs, getAppletList } = useHookData()

const message = useMessage()

const rules = {
  wechat: {
    required: true,
    message: '请输入微信开发者工具路径',
    trigger: ['input', 'blur'],
  },
  alipay: {
    required: true,
    message: '请输入支付宝开发者工具路径',
    trigger: ['input', 'blur'],
  },
  proxy_url: {
    required: false,
    message: '请输入GitHub代理地址',
    trigger: ['input', 'blur'],
  },
}

const formRef = ref<FormInst | null>(null)
const refreshAppletList = async () => {
  await getAppletList()
  message.success('刷新小程序列表成功')
}

const openUrl = (url: string) => {
  window.ipcRenderer?.invoke('open:url', url)
}

const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      window.ipcRenderer?.invoke('saveConfig', toRaw(state.form))
      state.drawerOpen = false
    }
  })
}

onMounted(() => {
  window.ipcRenderer?.on('logs', (_, data) => {
    state.logs?.unshift(data)
  })
  window.ipcRenderer?.on('init', (_, data) => {
    console.log('init', data)
    state.form = data
  })
  getAppletList()
})
</script>

<style scoped>
.log-enter-active,
.log-leave-active {
  transition: all 0.5s ease;
}
.log-enter-from,
.log-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 自定义滚动条样式 - 应用到绝对定位的滚动容器 */
.absolute::-webkit-scrollbar {
  width: 8px;
}

.absolute::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.absolute::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.5);
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.absolute::-webkit-scrollbar-thumb:hover {
  background: rgba(156, 163, 175, 0.8);
}

/* 确保滚动容器正确设置 */
.absolute {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.5) rgba(0, 0, 0, 0.1);
}
</style>
