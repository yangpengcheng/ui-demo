import { createRouter, createWebHistory } from 'vue-router'

export const constantRoutes = [
  {
    path: '/button',
    name: 'Button',
    meta: {
      title: 'button'
    },
    component: () => import('../views/ButtonView.vue')
  },
  {
    path: '/alert',
    name: 'Alert',
    meta: {
      title: 'alert'
    },
    component: () => import('../views/AlertView.vue')
  },
  {
    path: '/badge',
    name: 'Badge',
    meta: {
      title: 'badge'
    },
    component: () => import('../views/BadgeView.vue')
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    meta: {
      title: 'checkbox'
    },
    component: () => import('../views/CheckboxView.vue')
  },
  {
    path: '/input',
    name: 'Input',
    meta: {
      title: 'input'
    },
    component: () => import('../views/InputView.vue')
  },
  {
    path: '/link',
    name: 'Link',
    meta: {
      title: 'link'
    },
    component: () => import('../views/LinkView.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    meta: {
      title: 'menu'
    },
    component: () => import('../views/MenuView.vue')
  },
  {
    path: '/radio',
    name: 'Radio',
    meta: {
      title: 'radio'
    },
    component: () => import('../views/RadioView.vue')
  },
  {
    path: '/slider',
    name: 'Slider',
    meta: {
      title: 'slider'
    },
    component: () => import('../views/SliderView.vue')
  },
  {
    path: '/switch',
    name: 'Switch',
    meta: {
      title: 'switch'
    },
    component: () => import('../views/SwitchView.vue')
  },
  {
    path: '/tag',
    name: 'Tag',
    meta: {
      title: 'tag'
    },
    component: () => import('../views/TagView.vue')
  },
  {
    path: '/card',
    name: 'Card',
    meta: {
      title: 'card'
    },
    component: () => import('../views/CardView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior: () => ({ top: 0 })
})

export default router
