import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      needsUser: false
    }
  },
  {
    path: '/main-page',
    name: 'main-page',
    component: () => import(/* webpackChunkName: "about" */ '../views/main-page.vue'),
    // meta: {
    //   needsUser: true
    // }
  },
  {
    path: '/seller-page',
    name: 'seller-page',
    component: () => import(/* webpackChunkName: "about" */ '../views/seller-page.vue'),
    // meta: {
    //   needsUser: true
    // }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue'),
    meta: {
      needsUser: false
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/signup.vue'),
    meta: {
      needsUser: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue'),
    meta: {
      needsUser: false
    }
  },
  {
    path: '/successful-registration',
    name: 'Successful-registration',
    component: () => import(/* webpackChunkName: "about" */ '../views/successful-registration.vue'),
    meta: {
      needsUser: false
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/cart.vue'),
    // meta: {
    //   needsUser: true
    // }
  },
  {
    path: '/successfuly-signed-out',
    name: 'Successfuly-signed-out',
    component: () => import(/* webpackChunkName: "about" */ '../views/successfuly-signed-out.vue'),
    meta: {
      needsUser: false
    }
  },
  {
    path: '/forgot-password',
    name: 'Forgot-password',
    component: () => import(/* webpackChunkName: "about" */ '../views/forgot-password.vue'),
    meta: {
      needsUser: false
    }
  },
  {
    path: '/settings-page',
    name: 'settings-page',
    component: () => import(/* webpackChunkName: "about" */ '../views/settings-page.vue'),
    meta: {
      // needsUser: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach ((to, from, next) => {
  
// });

export default router
