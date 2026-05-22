import { createApp } from "vue";
import "./style.css";
import "./index.css";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "@tailwindplus/elements";

createApp(App).use(store).use(router).mount("#app");
