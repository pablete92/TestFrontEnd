import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import HomeLayout from "@/components/layouts/homeLayout";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "",
      component: HomeLayout,
      children: [
        {
          path: "/",
          name: "Home",
          component: Home
        }
      ]
    }
  ]
});
