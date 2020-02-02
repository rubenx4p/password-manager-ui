const getDefaultState = () => {
  return {
    email: '',
    password: '',
    showPassword: false
  }
}

export default {
  state: getDefaultState(),
  actions: {},
  mutations: {
    setEmail(state, email) {
      state.email = email
    },
    setPassword(state, password) {
      state.password = password
    },
    setShowPassword(state, showPassword) {
      state.showPassword = showPassword
    },
    resetState(state) {
      Object.assign(state, getDefaultState())
    }
  },
  getters: {}
}