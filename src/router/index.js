import { createRouter, createWebHistory } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import store from "../store";

const routes = [
  {
    path: '/',
    name: 'home',
    component: NavBar,
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("../views/HomeView.vue")
      },
      {
        path: "/categories",
        name: "categories",
        component: () => import("../views/CategoriesView.vue")
      },
      {
        path: "/inventory",
        name: "inventory",
        component: () => import("../views/InventoryView.vue")
      },
      {
        path: "/items",
        name: "items",
        component: () => import("../views/ItemsView.vue")
      },
      {
        path: "/refunds",
        name: "refunds",
        component: () => import("../views/RefundsView.vue")
      },
      {
        path: "/returns",
        name: "returns",
        component: () => import("../views/ReturnsView.vue")
      },
      {
        path: "/orders",
        name: "orders",
        component: () => import("../views/TransactionsView.vue")
      },
      {
        path: "/users",
        name: "users",
        component: () => import("../views/UsersView.vue")
      }
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/LoginView.vue")
  },
  {
    path: "/logout",
    name: "logout",
    beforeEnter(to, from, next) {
      store.commit("setToken", null);
      next({ name: "login" });
    },
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Global navigation guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.isUserLoggedIn;

  if (to.name !== 'login' && !isAuthenticated) {
    // Redirect to the login page if not authenticated
    next({ name: 'login' });
  } else {
    // Continue with the navigation
    next();
  }
});

export default router
