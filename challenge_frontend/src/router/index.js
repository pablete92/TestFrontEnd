import Vue from "vue";
import Router from "vue-router";
import { publicRoute } from "./config";

Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: publicRoute
});

export default router;
