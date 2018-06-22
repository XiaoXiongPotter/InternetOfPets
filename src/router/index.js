import Vue from 'vue'
import Router from 'vue-router'
import sign from '../components/sign.vue'
import register from '../components/register.vue'
Vue.use(Router)

export default new Router({
  routes: [
  {
    	path: '/sign',
      name: 'sign',
      component: sign
   },
    {
    	path: '/register',
      name: 'register',
      component: register
    }
  ]
})
