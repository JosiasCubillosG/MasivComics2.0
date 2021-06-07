import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/list-comics",
    name: "List",
    component: () => import("@/views/ListComics.vue"),
  },
  {
    path: "/detail-comic/:id",
    name: "List",
    component: () => import("@/views/DetailComic.vue"),
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active",
});

export default router;
