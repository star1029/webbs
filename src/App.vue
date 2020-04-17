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
  color: #555;
  height: 100%;
  background-color: #EEE9E9;
}
*{margin: 0; padding: 0;}
ul li{list-style: none;}
a{text-decoration: none;}
.webbs-list>*{margin: 15px; background-color: #FFFAFA;}
.webbs-list-dl{padding-bottom: 10px;}
.webbs-list-dl dt{margin-bottom: 10px; padding: 15px; line-height: 24px; border-bottom: 1px solid #8B8989;}
.webbs-list-dl dd{padding: 0 15px; line-height: 24px; font-size: 14px;}

</style>
