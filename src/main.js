import Vue from "vue";
import App from "./App.vue";

import VueResource from "vue-resource";
import Vuelidate from "vuelidate";
import wysiwyg from "vue-wysiwyg";

import router from "./routes";
import store from "./store/store";

import {
  MdCard,
  MdButton,
  MdDialog,
  MdContent,
  MdTable,
  MdDialogConfirm
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";

Vue.use(MdCard);
Vue.use(MdButton);
Vue.use(MdDialog);
Vue.use(MdContent);
Vue.use(MdTable);
Vue.use(MdDialogConfirm);

Vue.use(VueResource);
Vue.http.options.root = "https://vue-gamespot.firebaseio.com/";

Vue.use(Vuelidate);

Vue.use(wysiwyg, {});

import Button from "./components/UI/button.vue";
Vue.component("app-button", Button);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
