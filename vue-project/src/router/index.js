import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../../views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../../components/login.vue"),
  },
  {
    path: "/book",
    name: "book",
    component: () => import("../../views/Book.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/book/add",
    name: "add",
    component: () => import("../../views/AddBook.vue"),
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  let isAuthenticated = localStorage.getItem('jwtToken'); // Check if the user is authenticated (e.g., by checking the JWT token)
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
