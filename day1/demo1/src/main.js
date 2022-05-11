// 1. 按需导入createApp
import { createApp } from 'vue'
// 2. 导入 App.vue 组件
import App from './components/class&style/App.vue'
// 3. 创建 createApp 实例
const app = createApp(App)
// 4. 把 App.vue 组件渲染到 index 指定区域
app.mount('#app')
