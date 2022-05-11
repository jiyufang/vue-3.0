<template>
  <div>
    <h3 class="thin" :class="isItalic ? 'italic' : ''">MyStyle 组件</h3>
    <button @click="isItalic = !isItalic">Toggle Italic</button>
  </div>
</template>

<script>
export default {
  name: 'MyStyle',
  data() {
    return {
      isItalic: true
    }
  }
}
</script>

<style lang="css" scoped>
.thin {
  font-weight: 200;
}
.italic {
  font-style: italic;
}
</style>
