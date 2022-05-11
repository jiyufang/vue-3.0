<template>
  <div>
    <h1>App 根组件</h1>
    <hr />
    <!-- 通过 data 绑定商品的数据列表 -->
    <my-table :data="goodslist">
      <template v-slot:header>
        <th>序号</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template v-slot:body="{ row, index }">
        <td>{{ index + 1 }}</td>
        <td>{{ row.goods_name }}</td>
        <td>￥{{ row.goods_price }}</td>
        <td>
          <input type="text" class="form-control form-contorl-sm form-trip" v-if="row.inputVisible" v-focus v-model.trim="row.inputValue" @blur="onInputConfirm(row)" @keyup.enter="onInputConfirm(row)" @keyup.esc="row.inputValue = ''" />
          <button type="button" class="btn btn-primary btn-sm" v-else @click="row.inputVisible = true">+Tag</button>
          <!-- 循环渲染标签信息 -->
          <span class="badge badge-warning ml-2" v-for="item in row.tags" :key="item">{{ item }}</span>
        </td>
        <td>
          <button type="button" class="btn btn-danger btn-sm" @click="onRevmoe(row.id)">删除</button>
        </td>
      </template>
    </my-table>
  </div>
</template>

<script>
import MyTable from './components/my-table/MyTable.vue'
export default {
  name: 'App',
  data() {
    return {
      // 声明商品列表数据
      goodslist: []
    }
  },
  created() {
    // 调用 getGoodsList
    this.getGoodsList()
  },
  methods: {
    // 初始化商品列表数据
    async getGoodsList() {
      // 发起 ajax 请求
      const { data: res } = await this.$http.get('/api/goods')
      // 请求失败
      if (res.status !== 0) {
        return console.log('获取商品列表失败')
      } else {
        // 请求成功
        this.goodslist = res.data
        console.log(this.goodslist)
      }
    },
    // 删除商品对应的 id
    onRevmoe(id) {
      // this.goodslist.filter((x) => x.id !== id)：将当前没有被删除的商品 id 过滤出来
      // (x) => 为箭头函数，如果过滤的商品 id 不等于 当前删除的商品 id，就被过滤出来
      this.goodslist = this.goodslist.filter((x) => x.id !== id)
    },
    // 失去焦点事件处理函数
    onInputConfirm(row) {
      // 把文本输入框里的值转存到 val 里
      const val = row.inputValue
      // 再把输入框的内容清空
      row.inputValue = ''
      // 隐藏输入框
      row.inputVisible = false
      console.log(val)
      // 如果 val 为空则不添加
      // 如果 val 的值已经存在 tags 数组中，则不重复添加
      if (!val || row.tags.indexOf(val) !== -1) return
      // 将用户输入的内容，作为新标签添加到 tags 数组中
      row.tags.push(val)
    }
  },
  directives: {
    // 封装自动获得焦点的函数
    focus(el) {
      el.focus()
    }
  },
  components: {
    MyTable
  }
}
</script>

<style lang="less" scoped>
.form-trip {
  width: 80px;
  display: inline-block;
}
</style>
