import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/ProductDetails',
    name: 'ProductDetails',
    component: () => import('../views/ProductDetails.vue')
  },
  {
    path: '/ShopingCart',
    name: 'ShopingCart',
    component: () => import('../views/ShopingCart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
