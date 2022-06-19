import { createRouter, createWebHashHistory } from "vue-router";
import Home from './Home'
import Product from './Product'
import Fashion from './Fashion'
import Accessory from './Accessory'
import Digital from './Digital'
import Cart from './Cart'
import NotFound from './NotFound'

export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },

  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/product',
      component: Product
    },
    {
      path: '/product/:id',
      component: Product
    },
    {
      path: '/fashion',
      component: Fashion
    },
    {
      path: '/accessory',
      component: Accessory
    },
    {
      path: '/digital',
      component: Digital
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFound // 404 페이지
    }
  ]
})