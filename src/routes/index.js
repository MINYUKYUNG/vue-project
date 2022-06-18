// import { createRouter, createWebHistory } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from './Home'
import Product from './Product'
import Fashion from './Fashion'
import Accessory from './Accessory'
import Digital from './Digital'
import Cart from './Cart'
import NotFound from './NotFound'

export default createRouter({
  // mode : 'history',
  // history: createWebHistory(),
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },

  routes: [
    {
      path: '/',
      component: Home // path에, 어떤 .vue 컴포넌트를 연결해서 사용할건지
    },
    {
      path: '/product',
      component: Product // path에, 어떤 .vue 컴포넌트를 연결해서 사용할건지
    },
    {
      path: '/product/:id',
      component: Product // path에, 어떤 .vue 컴포넌트를 연결해서 사용할건지
    },
    {
      path: '/fashion',
      component: Fashion // path에, 어떤 .vue 컴포넌트를 연결해서 사용할건지
    },
    {
      path: '/accessory',
      component: Accessory // path에, 어떤 .vue 컴포넌트를 연결해서 사용할건지
    },
    {
      path: '/digital',
      component: Digital // path에, 어떤 .vue 컴포넌트를 연결해서 사용할건지
    },
    {
      path: '/cart',
      component: Cart // path에, 어떤 .vue 컴포넌트를 연결해서 사용할건지
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFound // 404 페이지
    },
  ]
})