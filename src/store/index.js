import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import personalInfo from "./personal-info";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    }
  },
  getters: {
    error: state => state.error
  },
  actions: {},
  modules: {
    auth,
    personalInfo
  }
});
