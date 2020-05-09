
import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'

import index from '../components/page/index'
import write from '../components/page/write'
import detail from '../components/page/detail'
import listzero from '../components/page/listzero'
import search from '../components/page/search'

import login from '../components/common/login'
import error from '../components/common/error'


Vue.use(Router)
 
//创建实例 加入配置
export default new Router({
  routes:[
    {
      path: '/',
      component: home,
      children: [
        {
          path: '/',
          name: 'index',
          component: index
        },
        {
          path: '/write',
          name: 'write',
          component: write
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: detail
        },
        {
          path: '/listzero',
          name: 'listzero',
          component: listzero
        },
        {
          path: '/search/:key',
          name: 'search',
          component: search
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '*',
      name: 'error',
      component: error
    }
  ]
});
