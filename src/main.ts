import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//引入路由
import router from './router'
import pinia from './store'
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
//注册模板路由
app.use(router)
app.use(pinia)
//引入路由鉴权文件
import './permisstion'

app.mount('#app')
