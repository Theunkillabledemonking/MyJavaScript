import { createRouter, createWebHistory } from "vue-router";
import OneWayBinding from "@/components/oneWayBinding.vue";
import TowWayBinding from "@/components/towWayBinding.vue";
import VModelEvent from "@/components/vModelEvent.vue";

import Home from "@/components/Home.vue"; // 홈 화면 컴포넌트
import Completed from "@/components/Completed.vue"; // 완료된 항목 컴포넌트
import NotCompleted from "@/components/NotCompleted.vue"; // 미완료 항목 컴포넌트
import TodoDetail from "@/components/todoDetail.vue";

const routes = [
    { path: "/", component: OneWayBinding },
    { path: "/towway", component: TowWayBinding },
    { path: "/vmodel", component: VModelEvent },
    { path: "/home", component: Home},
    { path: "/completed", component: Completed},
    { path: "/notcompleted", component: NotCompleted},
    { path: "/todo/:id", component: TodoDetail}, // :id 값이 동적으로 변함
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;