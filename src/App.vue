<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
:root{
  --background-color: #EEE9E9;  /* 全局背景色 */
  --background-color-main: #FFFAFA;   /* 内容背景色 */
  --font-color: #666;   /* 字体颜色 */
  --font-color1: #8B8989;   /* 部分字体颜色 && 按钮滑过颜色 */
  --font-color-hover: #EEDD82;    /* 文字滑过颜色 */
  --border-color: #CDC9C9;    /* 边框 && 分割线颜色 */
}

html, body{height: 100%;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--font-color);
  height: 100%;
  background-color: var(--background-color);
}
*{margin: 0; padding: 0;}
ul li{list-style: none;}
a{text-decoration: none; color: var(--font-color);}
a:hover{color: var(--font-color-hover);}
.webbs-side>*{margin-top: 15px; margin-bottom: 15px; background-color: var(--background-color-main);}
.webbs-side-dl{padding-bottom: 10px;}
.webbs-side-dl dt{margin-bottom: 10px; padding: 15px; line-height: 24px; border-bottom: 1px solid var(--border-color);}
.webbs-side-dl dd{padding: 0 15px; line-height: 24px; font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}
.webbs-button{border: none; background: transparent; outline: none; color: var(--font-color); cursor: pointer;}
.webbs-button:hover{color: var(--font-color1);}
.webbs-button i{font-size: 12px;}

.webbs-list{padding: 20px; background-color: var(--background-color-main);}
.webbs-list dd{padding-bottom: 10px; margin-bottom: 10px; border-bottom: 1px dashed var(--border-color);}
.webbs-list dd a{display: flex; width: 100%;}
.webbs-list-title{flex-grow: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 18px;}
.webbs-list-attr{width: 250px; padding-top: 2px; text-align: right;}
.webbs-list-cate+.webbs-list-cate{margin-left: 5px;}
</style>
