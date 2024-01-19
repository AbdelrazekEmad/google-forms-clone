import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

app.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
});

app.use(vuetify);
app.use(router);
app.use(store);
app.mount("#app");
