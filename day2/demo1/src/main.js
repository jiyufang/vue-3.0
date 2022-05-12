import Vue from 'vue'
import App from './App.vue'
// 导入路由模块
import router from '@/router/index.js'
import './element-ui'
// 按需导入 Loading 效果
import { Loading } from 'element-ui'
// 导入 axios
import axios from 'axios'

// 配置请求根路径
axios.defaults.baseURL = 'https://www.escook.cn'
// 配置请求拦截器
// 声明变量，用来存储 Loading 组件的实例对象
let loadingInstance = null
axios.interceptors.request.use((config) => {
  // token 认证
  config.headers.Authorization = 'Bearer xxx'
  // 调用 Loading 效果  fullscreen: true   全屏展示
  loadingInstance = Loading.service({ fullscreen: true })
  console.log(config)
  // 固定写法
  return config
})
// 配置响应拦截器
axios.interceptors.response.use((response) => {
  // 请求get成功之后关闭 Loading 效果
  loadingInstance.close()
  return response
})

// 通过 Vue 构造函数配置的原型对象，全局配置 axios
Vue.prototype.$http = axios

Vue.config.productionTip = false

const app = new Vue({
  render: (h) => h(App),
  router
})

app.$mount('#app')
