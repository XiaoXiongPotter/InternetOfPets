import Vue from 'vue'
import Router from 'vue-router'
import login from '../m_page/login/login.vue'
import register from '../m_page/login/register.vue'
import forgetpassword from '../m_page/login/forgetpassword.vue'
import store from '../store/store.js'
Vue.use(Router)

if (sessionStorage.getItem('token')) {
store.commit('set_token', sessionStorage.getItem('token'))
}

const router = new Router({
	mode: "history",
  routes: [
  {
    	path: '/login',
      name: 'login',
      component: login
   },
    {
    	path: '/register',
      name: 'register',
      component: register
    },
    {
    	path: '/forgetpassword',
    	name: 'forgetpassword',
    	component: forgetpassword
    }
  ]
})
router.beforeEach((to, from, next) => {
if (to.matched.some(r => r.meta.requireAuth)) {           //这里的requireAuth为路由中定义的 meta:{requireAuth:true}，意思为：该路由添加该字段，表示进入该路由需要登陆的
if (store.state.token) {
next();
}
else {
next({
path: '/login',
query: {redirect: to.fullPath}
})
}
}
else {
next();
}
})
export default router