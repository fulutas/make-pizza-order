import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/create-pizza',
    alias : '/', // anasayfa'da bu component gelir.
    name: 'createPizza',
    component : () => import('@/views/CreatePizza')
  },
  {
    path: '/basket',
    name: 'basket',
    component : () => import('@/views/Basket')
  },
  {
    path: '/order-completed',
    name: 'order-completed',
    component : () => import('@/views/OrderCompleted'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
