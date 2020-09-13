import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    meta: { title: "首页" },
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
  },
  {
    path: "/mine",
    name: "mine",
    meta: { title: "我的" },
    component: () => import(/* webpackChunkName: "about" */ "@/views/Mine.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "登录" },
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
