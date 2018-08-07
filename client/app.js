import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// or import all icons if you don't care about bundle size
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import BootstrapVueTreeview from 'bootstrap-vue-treeview'

window.Bus = new Vue({})

window.axios = require('axios')

Vue.use(BootstrapVue)
Vue.use(BootstrapVueTreeview)

Vue.component('editor', require('vue2-ace-editor'))
Vue.component('icon', Icon)
Vue.component('content-builder-categories', require('./components/ContentBuilderCategories.vue'))

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }

