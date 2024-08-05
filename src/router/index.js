import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "form" */ '../views/FormView.vue')
  },
  {
    path: '/api',
    name: 'api',
    component: () => import(/* webpackChunkName: "api" */ '../views/ApiView.vue')
  },
  {
    path: '/teleport',
    name: 'teleport',
    component: () => import(/* webpackChunkName: "teleport" */ '../views/TeleportView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
