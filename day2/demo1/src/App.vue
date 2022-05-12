<template>
  <div>
    <h1>App 根组件</h1>
    <a href="#/home">主页</a>
    <a href="#/movie">电影</a>
    <el-button type="warning" @click="getInfo">警告按钮</el-button>
    <hr />
    <Home></Home>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
export default {
  name: 'APP',
  methods: {
    async getInfo() {
      const { data: res } = await this.$http.get('api/get')
      console.log(res)
    }
  },
  components: {
    Home
  }
}
</script>

<style lang="less" scoped>
a {
  padding: 0 5px;
}
</style>
