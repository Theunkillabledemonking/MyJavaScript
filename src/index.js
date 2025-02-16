import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./components/HomeView.vue";
import BoardView from "./components/BoardView.vue";
import PostView from "./components/PostView.vue";

const routes = [
  { path: "/", component: HomeView},
  { path: "/board", component: BoardView},
  { path: "/post/:id", component: PostView}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
