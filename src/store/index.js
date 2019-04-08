import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = () => new Vuex.Store({

  state: {
    proxies: [],
    filtratedProxies: []
  },
  getters: {},
  mutations: {
    loadProxies (state, payload) {
      state.proxies = payload
    },
    updateProxies (state, payload) {
      state.filtratedProxies = payload
    }
  },
  actions: {},
})

