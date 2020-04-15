<template>
  <el-row :gutter="15" class="index">
    <el-col :span="17">11</el-col>
    <el-col :span="7" class="webbs-home-list">
      <dl class="webbs-home-list-active">
        <dt>本周活跃</dt>
      </dl>
      <dl class="webbs-home-list-goods">
        <dt>好文推荐</dt>
      </dl>
      <dl>
        <dt>热门讨论</dt>
        <dd><router-link to="/detail/1">九十岁老太百为何起死回生</router-link></dd>
        <dd><router-link to="/detail/2">数百头母猪为度何半夜惨叫</router-link></dd>
        <dd><router-link to="/detail/3">女生公寓内裤为何频频失窃</router-link></dd>
        <dd><router-link to="/detail/5">超市方便面问为何惨遭黑手</router-link></dd>
        <dd><router-link to="/detail/4">隔壁老王为何泣不成声</router-link></dd>
        <dd><router-link to="/detail/6">排位为何频频连跪</router-link></dd>
        <dd><router-link to="/detail/7">队友为何全都是猪</router-link></dd>
      </dl>
      <dl>
        <dt>打破零回复 <router-link to="/listzero" class="webbs-home-list-more">查看更多</router-link></dt>
        <dd><router-link to="/detail/7">浅谈母胎单身的好处</router-link></dd>
        <dd><router-link to="/detail/8">哪些年的双十一都是怎样度过</router-link></dd>
        <dd><router-link to="/detail/9">单身狗的清香or恋爱的酸臭</router-link></dd>
        <dd><router-link to="/detail/10">哪一刻让你想结婚</router-link></dd>
        <dd><router-link to="/detail/11">今年的七夕准备如何度过</router-link></dd>
      </dl>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style>
  .webbs-home-list>*{margin: 15px; background-color: #FFFAFA;}
  .webbs-home-list dt{padding: 15px; line-height: 24px; border-bottom: 1px solid #8B8989;}
  .webbs-home-list dd{padding: 0 15px; line-height: 24px; font-size: 14px;}
  .webbs-home-list-more{float: right; font-size: 12px;}
</style>