import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //state存放所有需要共享的数据
  state: {
    CategoryData: [],
    addCount:null
  },
  //mutations是改变state的值
  mutations: {
    setCategoryData(state, data) {
      state.CategoryData = data
    },
    setAddCount(state, data) {
      state.addCount = data
    },
  },
  actions: {
  },
  modules: {
  }
})
