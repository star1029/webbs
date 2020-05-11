<template>
  <div class="write">
    <div class="webbs-write-title"><input type="text" v-model.trim="title" placeholder="标题..."></div>
    <div class="webbs-write-main">
      <editor id="tinymce" v-model="value" :init="init"></editor>
    </div>
    <div class="webbs-write-submit"><button class="webbs-button" @click="submit">提交</button></div>
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import editor from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver'

export default {
  name: 'write',
  components: {
    editor
  },
  data(){
    return{
      title: '',
      value: '',
      init: {
        skin_url: '/tinymce/skins/ui/oxide',// skin路径
        height: '100%',
        branding: false,
        menubar: false,
        elementpath: false,
        statusbar: false,
        toolbar: 'undo | fontselect | fontsizeselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | blockquote removeformat'
      }
    }
  },
  mounted () {
    tinymce.init({})
  },
  methods:{
    submit(){
      this.$message({
        message: '成功提交，等待审核！',
        type: 'success'
      })
    }
  }
}
</script>

<style>
  .write{margin-top: 15px; background-color: var(--background-color-main);}
  .webbs-write-title{padding: 5px; border-bottom: 1px solid var(--border-color);}
  .webbs-write-title input{box-sizing: border-box; width: 100%; padding: 10px 20px; height: 50px; line-height: 30px; font-size: 20px; background-color: transparent; border: none; outline: none;}
  .webbs-write-main{height: 600px;}
  .webbs-write-main .tox-tinymce{border-width: 0 0 1px 0;}
  .webbs-write-submit{position: relative; padding: 15px 30px; text-align: right;}
  .webbs-write-submit button{padding: 10px 20px; font-size: 16px; line-height: 18px; letter-spacing: 2px; border: 1px solid var(--font-color1); border-radius: 5px;}
  .webbs-write-submit button:hover{background-color: var(--font-color1); color: #FFF;}
</style>
