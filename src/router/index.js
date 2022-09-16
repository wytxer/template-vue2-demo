import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue')
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
