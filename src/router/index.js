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
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }, 
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  }, 
  {
    path: '/todolist',
    name: 'ToDoList',
    component: () => import('../views/ToDoList.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
    
]

const router = new VueRouter({
  routes
})

export default router
