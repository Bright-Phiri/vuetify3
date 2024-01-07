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
      }
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
