import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/demo',
  component: () => import(/* webpackChunkName: "demo" */ '@/views/demo.vue')
}]

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes
})

export default router
