import axiosInstance from "./axiosInstance";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/base.css";
import "@fortawesome/fontawesome-free/css/all.css";

const app = createApp(App);

app.use(router);
app.config.globalProperties.$axios = axiosInstance;

app.mount("#app");
