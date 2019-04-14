import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddMuse from '@/components/AddMuse'

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addmuse',
    name: 'AddMuse',
    component: AddMuse
  }]
})
