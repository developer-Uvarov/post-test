import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../pages/IndexPage'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
