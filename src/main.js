// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store"; // Vuex store 가져오기

const app = createApp(App);
app.use(store); // Vuex 등록
app.mount("#app");
