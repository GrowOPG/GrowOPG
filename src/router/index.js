import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main_page',
    name: 'Main Page',
    component: () => import(/* webpackChunkName: "about" */ '../views/main_page.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/signup.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
  },
  {
    path: '/successful-registration',
    name: 'Successful-registration',
    component: () => import(/* webpackChunkName: "about" */ '../views/successful-registration.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/cart.vue')
  },
  {
    path: '/successfuly-signed-out',
    name: 'Successfuly-signed-out',
    component: () => import(/* webpackChunkName: "about" */ '../views/successfuly-signed-out.vue')
  },
  {
    path: '/forgot-password',
    name: 'Forgot-password',
    component: () => import(/* webpackChunkName: "about" */ '../views/forgot-password.vue')
  },
  {
    path: '/create-new-password',
    name: 'Create-new-password',
    component: () => import(/* webpackChunkName: "about" */ '../views/create-new-password.vue')
  }
]
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
