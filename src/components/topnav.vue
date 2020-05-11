<template>
  <div class="topnav">
    <el-row type="flex">
      <el-col class="webbs-nav-top" :xs="{span:24}" :sm="{span:22,offset:1}" :md="{span:18,offset:3}" :lg="{span:16,offset:4}">
        <ul class="webbs-nav-list">
          <li><router-link to="/">首页</router-link></li>
          <li cate="life">生活</li>
          <li cate="econ">财经</li>
          <li cate="tech">技术</li>
          <li cate="gossip">娱乐</li>
          <li cate="news">新闻</li>
        </ul>
        <div class="webbs-nav-other">
          <input type="text" ref="search" v-on:keyup.enter="enter" v-model.trim="search" placeholder="请输入...">
          <i class="icon iconfont icon-sousuo webbs-nav-search" @click="show"></i>
          <router-link to="/write" class="webbs-nav-write"><i class="icon iconfont icon-write"></i></router-link>
          <router-link to="/login" class="webbs-nav-login">登录/注册</router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'topnav',
  data(){
    return {
      search: ''
    }
  },
  methods:{
    show(){
      this.$refs.search.className = this.$refs.search.className == "show" ? "": "show"
    },
    enter(){
      this.$router.push({name: 'search', params: { key: this.search }});
      this.search = "";
    }
  }
}
</script>

<style>
  .topnav{padding: 5px 0; font-size: 20px; box-shadow: 0 2px 2px rgba(205,201,201,0.75); background-color: var(--background-color-main);}
  .webbs-nav-top{display: flex;}
  .webbs-nav-list{flex-grow: 1;}
  .webbs-nav-list li{display: inline-block; margin: 0 10px; vertical-align: middle;}

  .webbs-nav-other>*{display: inline-block; vertical-align: middle;}
  .webbs-nav-other input{margin-right: 10px; width: 0; height: 26px; line-height: 26px; transition: 500ms all; border: none; outline: none; border-bottom: 1px solid var(--border-color); background-color: transparent;}
  .webbs-nav-other input.show{width: 170px;}
  .webbs-nav-search{font-size: 26px; cursor: pointer; color: var(--font-color1);}
  .webbs-nav-write{margin: 0 10px;}
  .webbs-nav-write i{font-size: 22px; color: var(--font-color1);}
  .webbs-nav-login{font-size: 18px;}
</style>