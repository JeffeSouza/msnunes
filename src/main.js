import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Maska from "maska";

var app = createApp(App);
app.use(router);
app.use(Maska);
app.mount("#app");
