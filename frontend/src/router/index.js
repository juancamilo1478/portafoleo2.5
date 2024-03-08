import { createRouter, createWebHistory } from 'vue-router'
import home from "../views/home/home.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: Register
    // },
    // {
    //   path: '/menu',
    //   name: 'menu',
    //   component: menu
    // },
    // {
    //   path: '/detailsuppliers/:id', // Aquí definimos un parámetro ':id'
    //   name: 'Detailsuppliers',
    //   component: detailSupplier
    // },
    // {
    //   path: '/bill/:id', // Aquí definimos un parámetro ':id'
    //   name: 'billdetail',
    //   component: bill
    // }
    
  ]
})

export default router

