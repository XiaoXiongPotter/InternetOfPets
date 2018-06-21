import Vue from 'vue'
import Router from 'vue-router'
import sign from '../components/sign.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sign',
      component: sign
    }
  ]
})
