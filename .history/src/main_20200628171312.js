import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './http/api'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Dialog } from 'vant';
Vue.use(Vant);

// 全局注册
Vue.use(Dialog);
Vue.prototype.$api = api
Vue.config.productionTip = false

Vue.prototype.$checkLogin = (next) => {
  if (!localStorage.user) {
    Dialog.confirm({
      title: '系统检测到您现在没有登陆',
      message: '是否立即前往登录/注册页面',
    }).then(()=>{
      router.push('/login')
      // console.log("你点击确认按钮");
    }).catch(()=>{})
    return false
  } else {
    next()
  }
}

Vue.prototype.$addbrowseList = (item) => {
  if (localStorage.getItem("browseList")) {
    let browse = JSON.parse(localStorage.getItem("browseList"));
    browse.push(item);
    localStorage.setItem("browseList", JSON.stringify(browse));
  } else {
    let arr = []
    arr.push(item)
    localStorage.setItem("browseList", JSON.stringify(arr));
  }
}
//封装方法：现阶段在main.js里封装
//全局引入：Vue.use(Dialog);//Vue.prototype.$api = api；//Vue.config.productionTip = false；//import { Dialog } from 'vant';
//格式：Vue.prototype.$方法 = (参数) =>{}

//一进来页面有两种可能：
//1：原来存过了 //2：没有存过
//所以判断：
//如果原来存过了 
   //--本地有这个数组（browseList），就直接拿出来用
   //--用一个数组去接收获取原来的数据
   //--再把新浏览过的数据push到数组里
   //--最后存到本地
//如果没有存过
  //--（点击了之后，把这一项存到本地）
  //--1：定义一个空数组arr来接收当前  
  //--2：把当前浏览的添加到数组中
  //--3：存到本地
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
