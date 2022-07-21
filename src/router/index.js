import Vue from "vue";
import VueRouter from "vue-router";
// import Page from "../components/Page.vue";
import Dashboard from "../components/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/:menu",
    name: "DEH",
    component: () =>
      import(/* webpackChunkName: "Page" */ "../components/Page.vue"),
    meta: {
      requiresAuth: true,
      updateRoutePathOnSave: true,
      clearCache: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
