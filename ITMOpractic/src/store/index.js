import { createStore } from 'vuex';

export default createStore({
  state: {
    filterTop: 0,
    formTop: 0,
    userVerification: false,
  },
  getters: {
    getFilterTop (state) {
      return state.filterTop;
    },
    getFormTop (state) {
      return state.formTop;
    },
    getUserVerification (state) {
      return state.userVerification;
    },
  },
  mutations: {
    setFilterTop (state, newCoord) {
      state.filterTop = newCoord;
    },
    setFormTop (state, newCoord) {
      state.formTop = newCoord;
    },
    setUserVerification (state, newState) {
      state.userVerification = newState;
    }
  },
  actions: {
  },
  modules: {
  }
});
