import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../../views/Home.vue";
import Login from "../../components/login.vue"; 
import Book from "../../views/Book.vue";
import AddBook from "../../views/AddBook.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../../components/login.vue"),
  },
  {
    path: "/book",
    name: "book",
    component: () => import("../../components/login.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/book/add",
    name: "add",
    component: () => import("../../components/login.vue"),
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
