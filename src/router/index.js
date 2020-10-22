import Vue from 'vue'
import VueRouter from 'vue-router'
import one from '../views/one'
import home from '../views/home'
import welcome from '../views/welcome'
import notFound from '../views/not-found'

Vue.use(VueRouter)

const routes = [
  { path: '', redirect: '/welcome' },
  { path: '/welcome', component: welcome },
  { path: '/main',
    component: one,
    children: [
      { path: '', redirect: 'home' },
      {
        path: 'home', component: home
      }
    ]
  },
  { path: '*', component: notFound }
]

const router = new VueRouter({
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})

export default router
