import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './http/api'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Dialog } from 'vant';
Vue.use(Vant);

// import { Search } from 'vant';
// Vue.use(Search)
// import { Icon } from 'vant';
// Vue.use(Icon);
// import { Swipe, SwipeItem } from 'vant';
// Vue.use(Swipe);
// Vue.use(SwipeItem);
// import { Lazyload } from 'vant';
// Vue.use(Lazyload);


// 全局注册
Vue.use(Dialog);
Vue.prototype.$api = api
Vue.config.productionTip = false

Vue.prototype.$checkLogin = (next) => {
  if (!localStorage.user) {
    Dialog.confirm({
      title: '系统检测到您现在没有登陆',
      message: '是否立即前往登录/注册页面',
    })
    return false
  } else {
    next()
  }
}



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
