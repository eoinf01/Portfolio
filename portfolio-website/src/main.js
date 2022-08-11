import { createApp } from "vue";
import { createPinia } from "pinia";
import { loadFonts } from "./plugins/webfontloader";
import App from "./App.vue";
import router from "./router";
import './index.css'

loadFonts()
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
