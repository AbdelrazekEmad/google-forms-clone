import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";

// componentes
import Login from "../components/Login/Login.vue";
import SignUp from "../components/Login/SignUp.vue";
import LandingPage from "../components/LandingPage.vue";
import NotFound from "../pages/NotFound.vue";
import formsList from "../pages/forms/Forms.vue";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      component: formsList,
    },
    {
      path: "/about",
      component: LandingPage,
    },
    {
      path: "/login",
      component: Login,
      meta: {
        requiresUnauth: true,
      },
    },
    {
      path: "/signup",
      component: SignUp,
      meta: {
        requiresUnauth: true,
      },
    },
    {
      path: "/forms",
      component: formsList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/login");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/forms");
  } else {
    next();
  }
});

export default router;
