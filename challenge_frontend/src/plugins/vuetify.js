import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

const opts = {
  theme: {
    primary: "#fff159"
  },
  icons: {
    iconfont: "md"
  }
};

export default new Vuetify(opts);
