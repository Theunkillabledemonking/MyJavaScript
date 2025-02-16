// src/main.js
import { createApp } from "vue";
import router from "./router";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);
app.use(router); // Vue에 router 등록
app.use(createPinia()); // pinia 등록
app.mount("#app");
