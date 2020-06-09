import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'main'
    },
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'empty'
    },
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'empty'
    },
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/recordbook',
    name: 'Recordbook',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Recordbook.vue')
  },
  {
    path: '/personal',
    name: 'Personal',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Personal.vue')
  },
  {
    path: '/iyp',
    name: 'Iyp',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/iyp.vue')
  },
  {
    path: '/pay',
    name: 'Pay',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Pay.vue')
  },
  {
    path: '/obhodnoy',
    name: 'Obhodnoy',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Obhodnoy.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
