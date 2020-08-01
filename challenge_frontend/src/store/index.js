import Vue from "vue";
import Vuex from "vuex";
import VuexI18n from "vuex-i18n";

import getters from "./getters";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  getters,
  state,
  mutations,
  actions
});

Vue.use(VuexI18n.plugin, store);

export default store;
