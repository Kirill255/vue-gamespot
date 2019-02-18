import Vue from "vue";
import App from "./App.vue";

import router from "./routes";

import { MdCard, MdButton, MdDialog, MdContent } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";

Vue.use(MdCard);
Vue.use(MdButton);
Vue.use(MdDialog);
Vue.use(MdContent);

import Button from "./components/UI/button.vue";
Vue.component("app-button", Button);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
