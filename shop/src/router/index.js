import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import categorize from '@/views/categorize.vue'
import Personal from '@/views/Personal.vue'
import shoppingCart from '@/views/shoppingCart.vue'
import childcategorize from '@/views/childcategorize.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/categorize',
    name: 'categorize',
    component: categorize,
    children: [
      {
        path: 'childcategorize',
        name: 'childcategorize',
        component: childcategorize
      }
    ]
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: shoppingCart
  },
  {
    path: '/Personal',
    name: 'Personal',
    component: Personal
  }
]

const router = new VueRouter({
  routes
})

export default router
