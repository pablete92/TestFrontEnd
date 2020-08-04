// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "@/router";
import store from "@/store";
import vuetify from "@/plugins/vuetify";
import VueCurrencyFilter from "vue-currency-filter";
import "@/i18n/index";

Vue.config.productionTip = false;

Vue.use(VueCurrencyFilter, {
  symbol: "$",
  thousandsSeparator: ".",
  fractionCount: 0,
  fractionSeparator: ",",
  symbolPosition: "front",
  symbolSpacing: true
});
/* eslint-disable no-new */
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
