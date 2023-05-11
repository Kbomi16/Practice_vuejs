import { createStore } from "vuex";

export default createStore({
  state: {
    loginUser: {
      name: null
    }
  },
  getters: {

  },
  mutations: {
    setLoginUser(state, user) {
      state.loginUser = user
    },
    logout(state) {
      state.loginUser = null
    }
  },
  actions: {

  },
  modules: {

  }
})