import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home_xmx/Home'
import Foruminfo from './pages/forum/Foruminfo.vue'
import ForumList from './pages/forum/ForumList.vue'
import PostForum from './pages/forum/PostForum.vue'
//lhh
import heroes from './pages/heroes_lhh/Heroes.vue'
import details from './pages/heroes_lhh/Details.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'Home',
      children:[
        {
         path:'home',
         component:Home
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path:'/forumlist',
      name:'forumlist',
      component:ForumList
    },
    {
      path:'/foruminfo/:id',
      name:'foruminfo',
      component:Foruminfo
    },
    {
      path:'/postforum/:nid',
      component:PostForum
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
