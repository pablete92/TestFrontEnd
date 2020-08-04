import i18n from "@/i18n/es.json";
import { HomeLayout } from "@/components/layouts";

export const publicRoute = [
  {
    path: "/",
    name: "",
    component: HomeLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/components/Home")
      },
      {
        path: "/items",
        name: "Items",
        component: () => import("@/components/Items")
      },
      {
        path: "/items/:id",
        name: "Details",
        component: () => import("@/components/Details"),
        props: true
      }
    ]
  },
  {
    path: "/MercadoLibre",
    beforeEnter() {
      location.href = i18n.externalLink.ML;
    }
  }
];
