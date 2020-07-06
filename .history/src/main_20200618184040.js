import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './http/api'
import BScroll from "better-scroll"
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
// //搜索
// import { Search } from 'vant';
// Vue.use(Search)

// import { Icon } from 'vant';
// Vue.use(Icon);

Vue.prototype.$api = api
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')