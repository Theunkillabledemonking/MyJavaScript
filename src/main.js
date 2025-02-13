import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Vue Router 불러오기

const app = createApp(App);
app.use(router); // vue router 등록
app.mount("#app"); // vue 앱 실행