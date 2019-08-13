import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase/app";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: "home", auth: true },
      component: () => import("./views/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      meta: { layout: "login" },
      component: () => import("./views/Login.vue")
    },
    {
      path: "/detail/:id",
      name: "detail",
      meta: { layout: "home", auth: true },
      component: () => import("./views/Detail.vue")
    },
    {
      path: "/search",
      name: "search",
      meta: { layout: "home", auth: true },
      component: () => import("./views/Search.vue")
    }
  ]
});
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.auth);
  if (requireAuth && !currentUser) {
    next("/login?message=login");
  } else {
    next();
  }
});

export default router;
