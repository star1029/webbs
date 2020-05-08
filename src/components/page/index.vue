<template>
  <el-row :gutter="15" class="index">
    <el-col :span="17">
      <div class="webbs-index-main">内容</div>
    </el-col>
    <el-col :span="7" class="webbs-list">
      <dl class="webbs-home-list-active webbs-list-dl" v-if="activeArr.length != 0">
        <dt>本周活跃</dt>
      </dl>
      <dl class="webbs-home-list-goods webbs-list-dl" v-if="goodsArr.length != 0">
        <dt>好文推荐</dt>
      </dl>
      <dl class="webbs-list-dl" v-if="discussArr.length != 0">
        <dt>热门讨论</dt>
        <dd v-for="item in discussArr" v-bind:key="item.id">
          <router-link :to="{name: 'detail', params:{id: item.id}}">{{item.title}}</router-link>
        </dd>
      </dl>
      <dl class="webbs-list-dl" v-if="replyArr.length != 0">
        <dt>打破零回复 <router-link to="/listzero" class="webbs-home-list-more">查看更多</router-link></dt>
        <dd v-for="item in replyArr" v-bind:key="item.id">
          <router-link :to="{name: 'detail', params:{id: item.id}}">{{item.title}}</router-link>
        </dd>
      </dl>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'index',
  data(){
    return {
      activeArr: [],
      goodsArr: [],
      discussArr: [
        {id: 1, title: '九十岁老太百为何起死回生'},
        {id: 2, title: '数百头母猪为度何半夜惨叫'},
        {id: 3, title: '女生公寓内裤为何频频失窃'},
        {id: 4, title: '超市方便面问为何惨遭黑手'},
        {id: 5, title: '隔壁老王为何泣不成声'},
        {id: 6, title: '排位为何频频连跪'},
        {id: 7, title: '队友为何全都是猪'}
      ],
      replyArr: [
        {id: 8, title: '浅谈母胎单身的好处'},
        {id: 9, title: '哪些年的双十一都是怎样度过'},
        {id: 10, title: '单身狗的清香or恋爱的酸臭'},
        {id: 11, title: '今年的七夕准备如何度过'},
        {id: 12, title: '哪一刻让你想结婚'}
      ]
    }
  }
}
</script>

<style scoped>
  .webbs-index-main{margin: 15px 0; height: 500px; background-color: #FFFAFA;}
  .webbs-home-list-more{float: right; font-size: 12px;}
</style>