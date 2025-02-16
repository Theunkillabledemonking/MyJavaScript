// src/store/index.js
import { createStore } from "vuex";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProfileView from "../views/ProfileView.vue";

const routes = [
    { path: "/", component: HomeView },
    { path: "/profile", component: ProfileView}
];

const router = createRouter({
    history: createWebHistory(),
});

export default router;

export default createStore({
    state: { count: 0 },
    mutations: {
        increment(state) {
            state.count++;
        },
    },
    actions: {
        incrementAsync({ commit }) {
            setTimeout(() => {
                commit("increment");
            }, 1000);
        },
    },
    getters: {
        doubleCount: (state) => state.count * 2,
    },
});
