import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: Home,
    component: Home
  }
];
const router = new VueRouter({
  mode: 'hash',
  base: process.nextTick.BASE_URL,
  routes
})
export default router;