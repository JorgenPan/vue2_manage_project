import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

//require.ensure( dependencies[], callback(require), chunkName: String)按需加载函数
const login = r => require.ensure([], () => r(require('@/page/login')), 'login');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
