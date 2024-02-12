import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {
      name: "Ivan_Mazepa",
      discription: "Продажа голды WOW 24/7"
    }
  },
  getters: {
    getUserName (state) {
      return state.user.name;
    },
    getUserDiscription (state) {
      return state.user.discription;
    }
  },
  mutations: {
    setUserName (state, newName) {
      state.user.name = newName;
    },
    setUserDiscription (state, newDiscription) {
      state.user.discription = newDiscription;
    }
  },
  actions: {
  },
  modules: {
  }
});
