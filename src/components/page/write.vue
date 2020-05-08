<template>
  <div class="write">
    <div class="webbs-write-title"><input type="text" v-model.trim="title" placeholder="标题..."></div>
    <div class="webbs-write-main"></div>
    <div class="webbs-write-submit"><button class="webbs-button">提交</button></div>
  </div>
</template>

<script>

export default {
  name: 'write',
  data(){
    return{
      title: ''
    }
  },
  methods:{

  }
}
</script>

<style scoped>
  .write{margin-top: 15px; background-color: #FFFAFA;}
  .webbs-write-title{padding: 5px; border-bottom: 1px solid #CDC9C9;}
  .webbs-write-title input{box-sizing: border-box; width: 100%; padding: 10px 20px; height: 50px; line-height: 30px; font-size: 20px; background-color: transparent; border: none; outline: none;}
  .webbs-write-main{min-height: 500px;}
  .webbs-write-submit{position: relative; padding: 15px 30px; text-align: right;}
  .webbs-write-submit button{padding: 10px 20px; font-size: 16px; line-height: 18px; letter-spacing: 2px; border: 1px solid #8B8989; border-radius: 5px;}
  .webbs-write-submit button:hover{background-color: #8B8989; color: #FFF;}
</style>
