import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //state存放所有需要共享的数据
  state: { 
    category:[]
  },
  //mutations是改变state的值
  mutations: {
    setCategory(state,data){
    state.category = data
    }
  },
  actions: {
  },
  modules: {
  }
})
