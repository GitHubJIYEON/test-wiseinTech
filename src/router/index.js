import { createRouter, createWebHistory } from "vue-router";
import BlogHome from "../views/BlogHome.vue";
import BlogDetail from "../views/BlogDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: BlogHome,
  },
  {
    path: "/detail",
    name: "detail",
    component: BlogDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
