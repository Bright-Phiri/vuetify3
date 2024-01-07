import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    token: null,
    temp_pass: null,
    isUserLoggedIn: false,
  },
  mutations: {
    setUser(state, payload) {
        state.user = payload
    },
    setToken(state, payload){
        state.token = payload
        if(payload){
            state.isUserLoggedIn = true
        } else {
            state.isUserLoggedIn = false
        }
    },
    setTempPass(state, payload){
        state.temp_pass = payload
    },
    setOderId(state, payload){
        state.order_id = payload
    },
    setOderID(state, payload){
        state.order_ID = payload
    }
  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
