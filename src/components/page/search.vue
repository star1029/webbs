<template>
  <div class="search">
    <div v-if="length == 0" class="webbs-search-empty">暂时没有相关文章呢~</div>
    <dl v-else class="webbs-list webbs-search-list">
      <dt>找到相关 {{length}} 篇文章</dt>
      <dd v-for="item in list" :key="item.id">
        <router-link :to="{name: 'detail', params: {id: item.id}}">
          <p class="webbs-list-title">{{item.title}}</p>
          <p class="webbs-list-attr">
            <el-tag class="webbs-list-cate" size="mini" v-for="tag in item.cate" v-bind:key="tag.key">{{cateObj[tag]}}</el-tag>
          </p>
        </router-link>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'search',
  data(){
    return {
      list: [
        {id: 1, title: '子曰', content: '孔子说，老子都是骗人的！', time: '2019-11-02', cate: ['gossip']},
        {id: 2, title: '老子曰', content: '孔子在放屁！', time: '2019-11-02', cate: ['gossip']}
      ],
      cateObj: {'gossip': '娱乐', 'news': '新闻', 'life': '生活', 'econ': '财经', 'tech': '技术'}
    }
  },
  computed:{
    length(){
      return this.list.length
    }
  }
}
</script>

<style scoped>
  .webbs-search-empty{padding: 30px; font-size: 20px;}
  .webbs-search-list{margin-top: 15px;}
  .webbs-search-list dt{margin-bottom: 10px; height: 50px; line-height: 50px; border-bottom: 1px solid var(--border-color);}
</style>