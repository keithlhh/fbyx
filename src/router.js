import Vue from 'vue'
import Router from 'vue-router'

import home from './pages/home_xmx/Home'

Vue.use(Router)

export default new Router({
  routes: [
   {
     path:'/home',
     component:home
   }
  ]
})
