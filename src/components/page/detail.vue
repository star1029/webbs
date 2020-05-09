<template>
  <el-row :gutter="15" class="detail">
    <el-col :span="17">
      <div class="webbs-detail-main">
        <div class="webbs-detail-article">
          <h3>{{title}}</h3>
          <div class="webbs-detail-article-content">{{content}}</div>
          <button class="webbs-button webbs-detail-article-like" v-on:click="like($event)">
            <i class="icon iconfont icon-like"></i>
          </button>
          <button class="webbs-button webbs-detail-article-like" v-on:click="unlike($event)">
            <i class="icon iconfont icon-cai2"></i>
          </button>
          <button class="webbs-button webbs-detail-article-comment" @click="write"> <i class="icon iconfont icon-write"></i> 写评论</button>
        </div>
        <div class="webbs-detail-comment">
          <div v-show="show" class="webbs-detail-comment-write">
            <el-input type="textarea" ref="textarea" :rows="4" placeholder="请输入..." v-model.trim="textarea"></el-input>
            <div class="webbs-detail-comment-btnGroup">
              <button class="webbs-button" @click="publish">发表</button>
              <button class="webbs-button" @click="cancel">取消</button>
            </div>
          </div>
          <div v-if="replys == 0">
            暂无评论，快来抢沙发~
          </div>
          <div v-else class="webbs-detail-reply">
            <button class="webbs-button" @click="sort='hot'">按热度</button> / <button class="webbs-button" @click="sort='time'">按发布时间</button>
            <span class="webbs-detail-replyNum">评论数 <span>{{replys}}</span></span>
            <div class="webbs-detail-reply-item" v-for="item in replyList" :key="item.id">
              <div class="webbs-detail-reply-conent">
                <img class="webbs-detail-reply-avatar" :src="`${publicPath}reply_avatar.jpg`" alt="头像">
                <p><span>{{item.author}}：</span> {{item.content}}</p>
              </div>
              <div class="webbs-detail-reply-other">
                <button class="webbs-button webbs-detail-article-like" @click="like($event)">
                  <i class="icon iconfont icon-like"></i>
                </button>
                <button class="webbs-button webbs-detail-article-like" @click="unlike($event)"> 
                  <i class="icon iconfont icon-cai2"></i>
                </button>
                <button class="webbs-button webbs-detail-article-comment"> <i class="icon iconfont icon-pinglun"></i> 回复</button>
              </div>
              <div class="webbs-detail-reply-more"></div>
            </div>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="7" class="webbs-side">
      <div class="webbs-detail-author">
        <div class="webbs-detail-avatar"><img :src="`${publicPath}avatar.jpeg`" alt="头像"></div>
        <p class="webbs-detail-nickname">{{nickname}}</p>
        <ul class="webbs-detail-fens">
          <li>文章数: {{artNum}}</li>
          <li>粉丝数: {{fensNum}}</li>
        </ul>
        <dl v-if="article.length != 0" class="webbs-detail-hot">
          <dt><b>他的热门文章</b></dt>
          <dd v-for="item in article" v-bind:key="item.id">
            <router-link :to="{name: 'detail', params:{id: item.id}}">{{item.title}}</router-link>
          </dd>
        </dl>
      </div>
      <dl class="webbs-side-dl" v-if="about.length != 0">
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
      title: '子曰',
      content: '孔子说，老子都是骗人的！',
      replyList: [
        {id: 1, author: '老子', content: '孔子在放屁！', like: 1, unlike: 0, reply: 1},
        {id: 2, author: '墨子', content: '兼爱，非攻', like: 1, unlike: 0, reply: 1},
        {id: 3, author: '孟子', content: '不说了，我先搬家', like: 1, unlike: 0, reply: 1},
        {id: 4, author: '庄子', content: '我怎么醒了', like: 1, unlike: 0, reply: 1},
        {id: 5, author: '钻子', content: '这个孔钻的有些大这个孔钻的有些大这个孔钻的有些大这个孔钻的有些大这个孔钻的有些大这个孔钻的有些大这个孔钻的有些大', like: 1, unlike: 0, reply: 1}
      ],
      show: false,
      textarea: '',
      sort: 'hot',
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
  },
  computed:{
    replys(){
      return this.replyList.length
    }
  },
  methods:{
    like(e){
      e.target.style.color = "#F00";
      console.log(this.$route.params.id);
      this.$message({
        message: '点赞成功！',
        type: 'success'
      });
    },
    unlike(e){
      e.target.style.color = "#00BFFF";
    },
    write(){
      this.textarea = '';
      this.show = true;
    },
    publish(){
      if(this.textarea == ''){
        this.$message({
          message: '内容不能为空！',
          type: 'error'
        });
        this.$refs.textarea.focus();
      }else{
        this.replyList.push({ id: this.replyList.length + 1, content: this.textarea, like: 0, unlike: 0, reply: 0 })
        this.show = false;
      }
    },
    cancel(){
      this.show = false;
    }
  }
}
</script>

<style scoped>
  .webbs-detail-main{margin-top: 15px; background-color: #FFFAFA;}
  .webbs-detail-article{padding: 15px; border-bottom: 1px solid #CDC9C9;}
  .webbs-detail-article-content{margin-bottom: 10px; padding: 5px; font-size: 14px;}
  .webbs-detail-article-like{padding: 0 2px; margin: 0 2px;}

  .webbs-detail-article-comment{float: right;}
  .webbs-detail-comment{padding: 15px;}
  .webbs-detail-comment-write{margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px dashed #CDC9C9;}
  .webbs-detail-comment-btnGroup{position: relative; padding-top: 10px;}
  .webbs-detail-comment-btnGroup button+button{position: absolute; right: 0;}

  .webbs-detail-replyNum{float: right; padding: 0 5px; font-size: 12px;}
  .webbs-detail-reply-item{margin: 10px 0; border: 1px solid #EEE9E9; background-color: #FFF; padding: 10px 15px;}
  .webbs-detail-reply-conent{display: flex; padding-bottom: 10px; flex-wrap: nowrap;}
  .webbs-detail-reply-avatar{width: 25px; height: 25px; border-radius: 50%;}
  .webbs-detail-reply-conent p{padding-left: 10px; line-height: 24px; font-size: 12px; color: #8B8989;}
  .webbs-detail-reply-conent span{font-size: 14px; color: #666;}




  .webbs-detail-author{padding: 15px; text-align: center;}
  .webbs-detail-avatar{display: inline-block; width: 80px; height: 80px; overflow: hidden; border: 1px solid #CDC9C9; border-radius: 50%;}
  .webbs-detail-avatar img{width: 100%; height: 100%;}
  .webbs-detail-nickname{height: 34px; line-height: 34px;}
  .webbs-detail-fens li{display: inline-block; width: 50%;}
  .webbs-detail-hot{margin-top: 15px; padding-top: 15px; border-top: 1px solid #CDC9C9; font-size: 14px; line-height: 24px; text-align: left;}
  .webbs-detail-hot dd{overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}
</style>