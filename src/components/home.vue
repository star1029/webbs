<template>
  <div class="home">
    <topnav></topnav>
    <el-row type="flex">
      <el-col class="webbs-home-contain" :xs="{span:24}" :sm="{span:18,offset:3}" :md="{span:16,offset:4}" :lg="{span:16,offset:4}">
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
  .webbs-home-contain{background: #8B8989;}
</style>
