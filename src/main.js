// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {Rate,Tag} from 'element-ui'
import App from './App'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Rate)
Vue.use(Tag)
const router = new VueRouter(require('./router.js'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
router.push('/news/top')
