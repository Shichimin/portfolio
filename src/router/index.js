import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/components/Top'
import Profile from '@/components/Profile'
import Work from '@/components/Work'
import Skill from '@/components/Skill'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Top
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/works',
    component: Work
  },
  {
    path: '/skills',
    component: Skill
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router