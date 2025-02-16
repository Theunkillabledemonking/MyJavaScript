import { createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import BoardView from "../views/BoardView.vue";
import InquiryView from "../views/InquiryView.vue";
import TimetableView from "../views/TimetableView.vue";

const routes = [
    { path: "/", component: HomeView },
    { path: "/login", component: LoginView },
    { path: "/board", component: BoardView },
    { path: "/inquiry", component: InquiryView },
    { path: "/timetable", component: TimetableView }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;