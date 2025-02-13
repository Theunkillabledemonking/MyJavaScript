import { createRouter, createWebHistory } from "vue-router";
import OneWayBinding from "@/components/oneWayBinding.vue";
import TowWayBinding from "@/components/towWayBinding.vue";
import VModelEvent from "@/components/vModelEvent.vue";

const routes = [
    { path: "/", component: OneWayBinding },
    { path: "/towway", component: TowWayBinding },
    { path: "/vmodel", component: VModelEvent },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;