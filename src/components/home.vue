<template>
  <div class="home">
    <topnav></topnav>
    <el-row type="flex">
      <el-col class="webbs-home-contain" :xs="{span:24}" :sm="{span:22,offset:1}" :md="{span:18,offset:3}" :lg="{span:16,offset:4}">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import topnav from './topnav'

export default {
  name: 'home',
  components: {
    topnav
  }
}
</script>

<style scoped>
  .home{height: 100%; overflow: auto;}
  .webbs-home-contain{}
</style>
