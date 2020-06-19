import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cid: 0,
    activeKey: 0
  },
  mutations: {
    changecid (state, a) {
      this.state.cid = a.cindex
      this.state.activeKey = a.activeKey
    }
  },
  actions: {
  },
  modules: {
  }
})
