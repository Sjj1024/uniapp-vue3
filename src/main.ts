import { createSSRApp } from "vue";
import App from "./App.vue";

import uviewPlus from "uview-plus";
import { createPinia } from "pinia";

const Pinia = createPinia();

export function createApp() {
  const app = createSSRApp(App);

  app.use(Pinia);
  app.use(uviewPlus);

  return {
    app,
  };
}
