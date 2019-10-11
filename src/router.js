import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

const Routers = [{
  path: '/',
  name: 'index',
  component: Index
},
{
  path: '*',
  redirect: '/'
}
]

const RouterConfig = {
  mode: 'history',
  base: process.env.BASE_URL,
  routes: Routers
}

const router = new Router(RouterConfig)

export default router
