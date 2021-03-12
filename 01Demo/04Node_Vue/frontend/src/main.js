import Vue from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');