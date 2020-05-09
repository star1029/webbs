<template>
  <div class="listzero">
    <div class="webbs-zero-sort">按时间
      <button class="webbs-button"><i class="el-icon-bottom"></i></button><button class="webbs-button"><i class="el-icon-top"></i></button>
    </div>
    <dl class="webbs-list">
      <dd v-for="item in list" v-bind:key="item.id">
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
  name: 'listzero',
  data(){
    return{
      list: [
        {id: 1, title: '胡歌为何单身', time: '2019-11-02', cate: ['gossip']},
        {id: 2, title: '彭于晏为何单身', time: '2019-11-02', cate: ['gossip']},
        {id: 3, title: '胡歌和袁弘不为人知的关系', time: '2019-11-02', cate: ['gossip']},
        {id: 4, title: '胡歌和彭于晏不为人知的关系', time: '2019-11-02', cate: ['gossip']},
        {id: 5, title: '胡歌和霍建华不为人知的关系', time: '2019-11-02', cate: ['gossip']},
        {id: 6, title: '普京与小梅的感情', time: '2019-11-02', cate: ['news', 'gossip']},
        {id: 7, title: '特朗普与普京是何种关系', time: '2019-11-02', cate: ['news', 'gossip', 'life', 'econ', 'tech']},
        {id: 8, title: '鸡翅 or 鸡腿', time: '2019-11-02', cate: ['life']},
        {id: 9, title: '一夜暴富的方法', time: '2019-11-02', cate: ['econ']},
        {id: 10, title: 'php是不是最好的语言', time: '2019-11-02', cate: ['tech']},
        {id: 11, title: '仓鼠为什么喜欢跑滚轮', time: '2019-11-02', cate: ['life']},
        {id: 12, title: '当仓鼠不听话，选择红烧还是清蒸？', time: '2019-11-02', cate: ['life']},
        {id: 13, title: '胖仓鼠应该怎么处理', time: '2019-11-02', cate: ['life']}
      ],
      cateObj: {'gossip': '娱乐', 'news': '新闻', 'life': '生活', 'econ': '财经', 'tech': '技术'}
    }
  }
}
</script>

<style scoped>
  .webbs-zero-sort{padding: 10px;}
</style>
