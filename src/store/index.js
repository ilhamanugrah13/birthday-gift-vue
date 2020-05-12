import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    paramName() {
      return process.env.VUE_APP_PARAM_NAME;
    },
    fullName() {
      return process.env.VUE_APP_FULL_NAME;
    },
    nickName() {
      return process.env.VUE_APP_NICK_NAME;
    },
  },
});
