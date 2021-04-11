import { createRouter, createWebHistory } from 'vue-router'

export const constantRoutes = [
  {
    path: '/button',
    name: 'Button',
    meta: {
      title: 'button'
    },
    component: () => import('../views/ButtonView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior: () => ({ top: 0 })
})

export default router
