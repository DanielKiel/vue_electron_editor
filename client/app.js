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

let Datastore = require('nedb')

window.db = new Datastore()
//window.db.business_units = new Datastore({ filename: './database/business_units', autoload: true })

Vue.use(BootstrapVue)
Vue.use(BootstrapVueTreeview)

Vue.component('editor', require('vue2-ace-editor'))
Vue.component('icon', Icon)
Vue.component('content-builder-categories', require('./components/ContentBuilderCategories.vue'))
Vue.component('business-unit-form', require('./components/forms/BusinessUnitForm.vue'))
Vue.component('select-business-unit', require('./components/navigations/SelectBusinessUnit.vue'))

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }

