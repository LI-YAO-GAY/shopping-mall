import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './http/api'
import BScroll from "better-scroll"
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//vant里的
import { Search } from 'vant';
Vue.use(Search)
import { Icon } from 'vant';
Vue.use(Icon);
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
import { Lazyload } from 'vant';
Vue.use(Lazyload);

Vue.prototype.$api = api
Vue.config.productionTip = false




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
