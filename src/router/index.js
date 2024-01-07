import { createRouter, createWebHistory } from 'vue-router'
import NavBar from '@/components/NavBar.vue'

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
        path: "/users",
        name: "users",
        component: () => import("../views/UsersView.vue")
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
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
