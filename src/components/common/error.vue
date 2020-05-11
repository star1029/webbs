<template>
  <div class="error">
    <h1>页面走失了~</h1>
    <button @click="back">点击返回首页</button>
  </div>
</template>

<script>
export default {
  name: 'error',
  methods: {
    back(){
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
  .error{text-align: center;}
  h1{padding-top: 300px; padding-bottom: 20px; font-size: 60px; color: #567; letter-spacing: 10px;}
  button{padding: 15px 20px; color: var(--background-color-main); background-color: var(--font-color1); font-size: 16px; letter-spacing: 2px; border: none; outline: none; border-radius: 25px; cursor: pointer;}
</style>