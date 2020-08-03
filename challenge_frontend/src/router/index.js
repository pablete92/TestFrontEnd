import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Items from "@/components/Items";
import Details from "@/components/Details";
import { HomeLayout } from "@/components/layouts";

Vue.use(Router);
const router = new Router({
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
        },
        {
          path: "/items?search=:id",
          name: "Items",
          component: Items
        },
        {
          path: "/items/:id",
          name: "Details",
          component: Details
        }
      ]
    }
  ]
});

export default router;
