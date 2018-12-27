import Vue from 'vue'
import Router from 'vue-router'

import home from './pages/home_xmx/Home'
//lhh
import heroes from './pages/heroes_lhh/Heroes.vue'
import details from './pages/heroes_lhh/Details.vue'
Vue.use(Router)

export default new Router({
  routes: [
   {
     path:'/',
     component:home,
     children:[
       {
        path:'home',
        component:home
       }
     ]
   },
   {
     path:'/heroes',
     component:heroes
   },
   {
     path:'/details',
     component:details
   }
  ]
})
