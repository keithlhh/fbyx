import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//1.引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//2.1:引入axios库
import axios from 'axios'
//2.2:跨域保存session值
axios.defaults.withCredentials = true;
//2.3:注册组件
Vue.prototype.axios = axios;

//3.引入vue-source
import VueSource from 'vue-source'
Vue.use(VueSource)


Vue.config.productionTip = false

//7:日期过滤器
//val:原先日期对象
Vue.filter("datatimeFilter",function(val){
  //7.1:创建日期对象
  var data = new Date(val)
  //7.2:获取年月日十分秒
  var y = data.getFullYear();
  var m = data.getMonth()+1;
  var d = data.getDate();
  var h = data.getHours();
  var mi = data.getMinutes();
  var s = data.getSeconds();
  //7.3:月日格式判断07
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  //7.4:拼接字符串返回
  return `${y}-${m}-${d} ${h}:${mi}:${s}`;
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
