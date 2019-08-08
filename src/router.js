import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: "home" },
      component: () => import("./views/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      meta: { layout: "login" },
      component: () => import("./views/Login.vue")
    },
    {
      path: "/detail",
      name: "detail",
      meta: { layout: "home" },
      component: () => import("./views/Detail.vue")
    }
  ]
});
