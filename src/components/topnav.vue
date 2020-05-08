<template>
  <div class="topnav">
    <el-row type="flex">
      <el-col class="webbs-nav-top" :xs="{span:24}" :sm="{span:22,offset:1}" :md="{span:18,offset:3}" :lg="{span:16,offset:4}">
        <ul class="webbs-nav-list">
          <li><router-link to="/">首页</router-link></li>
          <li>生活</li>
          <li>财经</li>
          <li>技术</li>
          <li>娱乐</li>
          <li>新闻</li>
        </ul>
        <div class="webbs-nav-other">
          <i class="icon iconfont icon-sousuo2 webbs-nav-search"></i>
          <router-link to="/write" class="webbs-nav-write"><i class="icon iconfont icon-write"></i></router-link>
          <router-link to="/login" class="webbs-nav-login">登录/注册</router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'topnav'
}
</script>

<style>
  .topnav{padding: 5px 0; font-size: 20px; box-shadow: 0 2px 2px rgba(205,201,201,0.75); background-color: #FFFAFA;}
  .webbs-nav-top{display: flex;}
  .webbs-nav-list{flex-grow: 1;}
  .webbs-nav-list li{display: inline-block; margin: 0 10px; vertical-align: middle;}

  .webbs-nav-other>*{display: inline-block; vertical-align: middle;}
  .webbs-nav-search{font-size: 26px; cursor: pointer; color: #999;}
  .webbs-nav-write{margin: 0 10px;}
  .webbs-nav-write i{font-size: 26px; color: #999;}
  .webbs-nav-login{color: #666;}
</style>