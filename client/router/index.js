import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Settings from '../views/Settings'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
      {
          path: '/settings',
          component: Settings
      }
  ]
})
