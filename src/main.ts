import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import App from '@/App.vue'
const app = createApp(App)
app.use(ElementPlus)
app.use(ElementPlus, {
  locale: zhCn,
})
// svg插件需要配置的代码
import 'virtual:svg-icons-register'

// 注册全局组件
import gloablComponent from '@/components/index'
app.use(gloablComponent)

app.mount('#app')
