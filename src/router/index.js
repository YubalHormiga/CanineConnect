import { createRouter, createWebHistory } from "vue-router";
import { useFirebaseAuth } from "vuefire";
import { onAuthStateChanged } from "firebase/auth";
import { inject } from "vue";
import HomeView from "../views/Home/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/informacion",
      name: "information",

      component: () => import("../views/Information/InformationView.vue"),
      children: [
        {
          path: "/",
          name: "care",

          component: () => import("../views/Information/CareTipsView.vue"),
        },
        {
          path: "/razas",
          name: "breeds",

          component: () => import("../views/Information/BreddsView.vue"),
        },
        {
          path: "/responsabilidad",
          name: "stewardship",

          component: () => import("../views/Information/StewardshipView.vue"),
        },
      ],
    },
    {
      path: "/adopcion",
      name: "adoption",
      component: () => import("../views/AdoptionView.vue"),
    },

    {
      path: "/recursos",
      name: "resources",
      component: () => import("../views/ResourcesView.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../views/BlogView.vue"),
    },
    {
      path: "/objetos",
      name: "lost-items",
      component: () => import("../views/Items/LostAndFoundView.vue"),
    },
    {
      path: "/objetos/encontrados",
      name: "found-items",
      component: () => import("../views/Items/ReportFoundItemView.vue"),
    },
    {
      path: "/objetos/editar/:id",
      name: "edit-item-found",
      component: () => import("../views/Items/EditFoundItemView.vue"),
     
    },
    {
      path: "/donate",
      name: "donate",
      component: () => import("../views/DonationView.vue"),
    },
    {
      path: "/sebusca",
      name: "lost-dogs",
      component: () => import("../views/LostDogs/LostAndFoundDogsView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/sebusca/encontrados",
      name: "found-dogs",
      component: () => import("../views/LostDogs/ReportDogFoundView.vue"),
    },
    {
      path: "/chat",
      name: "chat",
      component: () => import("../views/Chat/Chat.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: () => import("../views/PrivacyPolicyView.vue"),
    },
    {
      path: "/:catchAll(.*)*",
      component: () => import("../views/ErrorNotFound.vue"),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const toast = inject("toast");
  const requiresAuth = to.matched.some((url) => url.meta.requiresAuth);
  if (requiresAuth) {
    try {
      await athenticateUser();
      next();
    } catch (error) {
      toast.open({
        message: `Solo para usuarios registrados`,
        type: "error",
      });
      next(false);
    }
  } else {
    next();
  }
});

function athenticateUser() {
  const auth = useFirebaseAuth();
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      if (user) {
        resolve();
      } else {
        reject();
      }
    });
  });
}
export default router;
