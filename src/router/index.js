import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";

// componentes
import Login from "../components/Login/Login.vue";
import SignUp from "../components/Login/SignUp.vue";
import LandingPage from "../components/LandingPage.vue";
import NotFound from "../pages/NotFound.vue";
import formsList from "../pages/forms/Forms.vue";
import SingleForm from "../pages/forms/SingleForm.vue";
import PreviewForm from "../pages/forms/PreviewForm.vue";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      component: formsList,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/about",
      component: LandingPage,
      meta: {
        requiresUnauth: true,
      },
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
      path: "/forms/:formId/edit",
      component: SingleForm,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/forms/:formId/preview",
      component: PreviewForm,
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
