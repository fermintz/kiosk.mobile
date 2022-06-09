import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'*',
    name:'notFound',
    component: ()=>import('../views/notFound.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: ()=>import('../views/home/home.vue'),
  },
  {
    path: '/',
    component:()=>import('../layout/order.vue'),
    children:[
      {
        path:'/product',
        name:'product',
        component: ()=>import('../views/product/product.vue'),
      },
      {
        path:'/detail',
        name:'detail',
        component: ()=>import('../views/detail/detail.vue'),
      },
      {
        path:'/point',
        name:'point',
        component: ()=>import('../views/point/point.vue'),
      },
    ],
  },
  {
    path:'/finish',
    name:'finish',
    component: ()=>import('../views/finish/finish.vue'),
  },
  {
    path:'/mypage',
    name:'mypage',
    component: ()=>import('../views/mypage/mypage.vue'),
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
