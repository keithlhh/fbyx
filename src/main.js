import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//1.引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//2.引入axios
import axios from 'axios';
Vue.prototype.axios=axios;

//3 引入lazyload
import lazyload from "vue-lazyload"
Vue.use(
  lazyload,{
    
  }
)

//4.引入videoplayer
import VideoPlayer from "vue-video-player"
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer);

//val：原先日期对象
Vue.filter("datatimeFilter",function(val){
  //7.1:创建日期对象
  var data = new Date(val)
  //7.2:获取年月日时分秒
  var y = data.getFullYear();
  var m = data.getMonth()+1;
  var d = data.getDate();
  var h = data.getHours();
  var mi = data.getMinutes();
  var s = data.getSeconds();
  //7.3:月日格式判断 07 08 09 10
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  //7.4:拼接字符串返回
  return `${y}-${m}-${d} ${h}:${mi}:${s}`;
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
