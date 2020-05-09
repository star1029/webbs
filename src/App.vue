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
html, body{height: 100%;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666;
  height: 100%;
  background-color: #EEE9E9;
}
*{margin: 0; padding: 0;}
ul li{list-style: none;}
a{text-decoration: none; color: #666;}
a:hover{color: #EEDD82;}
.webbs-side>*{margin-top: 15px; margin-bottom: 15px; background-color: #FFFAFA;}
.webbs-side-dl{padding-bottom: 10px;}
.webbs-side-dl dt{margin-bottom: 10px; padding: 15px; line-height: 24px; border-bottom: 1px solid #CDC9C9;}
.webbs-side-dl dd{padding: 0 15px; line-height: 24px; font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}
.webbs-button{border: none; background: transparent; outline: none; color: #666; cursor: pointer;}
.webbs-button:hover{color: #8B8989;}
.webbs-button i{font-size: 12px;}

.webbs-list{padding: 20px; background-color: #FFFAFA;}
.webbs-list dd{padding-bottom: 10px; margin-bottom: 10px; border-bottom: 1px dashed #CDC9C9;}
.webbs-list dd a{display: flex; width: 100%;}
.webbs-list-title{flex-grow: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 18px;}
.webbs-list-attr{width: 250px; padding-top: 2px; text-align: right;}
.webbs-list-cate+.webbs-list-cate{margin-left: 5px;}

</style>
