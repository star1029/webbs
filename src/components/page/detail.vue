<template>
  <el-row :gutter="15" class="detail">
    <el-col :span="17">1</el-col>
    <el-col :span="7" class="webbs-list">
      <div class="webbs-detail-author">
        <div class="webbs-detail-avatar"><img :src="`${publicPath}avatar.jpeg`" alt="头像"></div>
        <p class="webbs-detail-nickname">{{nickname}}</p>
        <ul class="webbs-detail-fens">
          <li>文章数: {{artNum}}</li>
          <li>粉丝数: {{fensNum}}</li>
        </ul>
        <dl v-if="article.length == 0 ? false:true" class="webbs-detail-hot">
          <dt><b>他的热门文章</b></dt>
          <dd v-for="item in article" v-bind:key="item.id">
            <router-link :to="{name: 'detail', params:{id: item.id}}">{{item.title}}</router-link>
          </dd>
        </dl>
      </div>
      <dl class="webbs-list-dl" v-if="about.length == 0 ? false:true">
        <dt>相关文章</dt>
        <dd v-for="item in about" v-bind:key="item.id">
          <router-link :to="{name: 'detail', params:{id: item.id}}">{{item.title}}</router-link>
        </dd>
      </dl>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'detail',
  data(){
    return{
      publicPath: process.env.BASE_URL,
      nickname: '一只大可爱',
      artNum: 30,
      fensNum: 2,
      article: [
        {id: 1, title: '九十岁老太百为何起死回生'},
        {id: 2, title: '数百头母猪为度何半夜惨叫'}
      ],
      about: [
        {id: 3, title: '女生公寓内裤为何频频失窃'},
        {id: 4, title: '超市方便面问为何惨遭黑手'},
        {id: 5, title: '隔壁老王为何泣不成声'},
        {id: 6, title: '排位为何频频连跪'},
        {id: 7, title: '队友为何全都是猪'}
      ]
    }
  }
}
</script>

<style>
  .webbs-detail-author{padding: 15px; text-align: center;}
  .webbs-detail-avatar{display: inline-block; width: 80px; height: 80px; overflow: hidden; border: 1px solid #EEE; border-radius: 50%;}
  .webbs-detail-avatar img{width: 100%; height: 100%;}
  .webbs-detail-nickname{height: 30px; line-height: 30px;}
  .webbs-detail-fens li{display: inline-block; width: 50%;}
  .webbs-detail-hot{margin-top: 15px; padding-top: 15px; border-top: 1px solid #CCC; font-size: 14px; line-height: 24px; text-align: left;}
</style>