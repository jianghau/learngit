import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 全局变量
  state: {
    user: undefined
  },
  // 修改全局变量必须通过mutations中的方法mutations只能采用同步方法
  mutations: {
    login (state, payload) {
      state.user = payload
    },
    loginOut (state) {
        state.user = undefined
    }
  },
  // 异步方法用actions
  actions: {
  },
  modules: {
  }
})
