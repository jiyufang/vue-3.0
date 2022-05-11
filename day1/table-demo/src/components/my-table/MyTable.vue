<template>
  <div>
    <table class="table table-bordered table-striped">
      <!-- 表格头部区域 -->
      <thead>
        <tr>
          <!-- 具名插槽 -->
          <slot name="header"></slot>
        </tr>
      </thead>
      <!-- 表格主体区域 -->
      <tbody>
        <tr v-for="(item, index) in data" :key="item.id">
          <!-- 作用域插槽 -->
          <!-- 当前行(row)的值 = 当前循环的 item 项 -->
          <slot name="body" :row="item" :index="index"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  props: {
    // 声明数据源
    data: {
      type: Array,
      // required 为 true 的话是必填项
      required: true,
      default: []
    }
  }
}
</script>

<style lang="less" scoped></style>
