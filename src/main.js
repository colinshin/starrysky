// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api'
import Highlight from './assets/plugins/highlight/highlight.js'
import axios from 'axios'

Vue.use(Highlight)
Vue.prototype.axios=axios


Vue.config.productionTip = false
Vue.prototype.Api=api;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
})