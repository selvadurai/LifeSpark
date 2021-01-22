import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import 'startbootstrap-sb-admin-2/css/sb-admin-2.css'

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
