import { createApp, VueElement } from 'vue'
import App from './App.vue'

// 导入bootstrap.css样式
import './assets/css/bootstrap.css'
import './index.css'

// 导入axios
import axios from 'axios'

const app = createApp(App)

// 进行全局配置
// 配置全局根路径
axios.defaults.baseURL = 'https://www.escook.cn'
// 将axios挂载到app上
app.config.globalProperties.$http = axios

app.mount('#app')


