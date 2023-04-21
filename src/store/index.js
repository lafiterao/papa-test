import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import textModule from "./modules";
const store = new Vuex.Store({
  state: {},
  mutations:{},
  actions: {},
  getters: {},
  modules: {
    textModule
  },
});

export default store;
