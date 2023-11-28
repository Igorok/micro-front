import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/registration",
      name: "registration",
      component: () => import("../views/RegistrationView.vue"),
    },
    {
      path: "/users-list",
      name: "users-list",
      component: () => import("../views/UsersListView.vue"),
    },
    {
      path: "/chat-private/:userId",
      name: "chat-private",
      component: () => import("../views/ChatPrivateView.vue"),
    },
    {
      path: "/discussions",
      name: "discussions",
      component: () => import("../views/DiscussionsView.vue"),
    },
    {
      path: "/chat-group/:id",
      name: "chat-group",
      component: () => import("../views/ChatGroupView.vue"),
    },
  ],
});

export default router;
