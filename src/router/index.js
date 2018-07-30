import Vue from 'vue'
import Router from 'vue-router'
import login from '../m_page/login/login.vue'
import register from '../m_page/login/register.vue'
import forgetpassword from '../m_page/login/forgetpassword.vue'
import complete from '../m_page/login/complete.vue'
import resetpassword from '../m_page/login/resetpassword.vue'
import resetsuccess from '../m_page/login/resetsuccess.vue'
import registerfalse from '../m_page/login/registerfalse.vue'
import home from '../m_page/home/home.vue'
import finder from '../m_page/finder/finder.vue'
import account from '../m_page/myAccount/account.vue'
import mypet from '../m_page/myAccount/mypet.vue'
import mysearch from '../m_page/myAccount/mysearch.vue'
import releaseSearch from '../m_page/finder/releaseSearch.vue'
import userInformation from '../m_page/myAccount/userInformation.vue'
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
    },
    {
    	path: '/complete',
    	name: 'complete',
    	component: complete
    },
      {
    	path: '/resetpassword',
    	name: 'resetpassword',
    	component: resetpassword
    },
     {
    	path: '/resetsuccess',
    	name: 'resetsuccess',
    	component: resetsuccess
    },
    {
    	path: '/registerfalse',
    	name: 'registerfalse',
    	component: registerfalse
    },
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/finder',
      name: 'finder',
      component: finder
    },
    {
      path: '/myAccount',
      name: 'account',
      component: account
    },
    {
      path: '/mypet',
      name: 'mypet',
      component: mypet
    },
    {
      path: '/mysearch',
      name: 'mysearch',
      component: mysearch
    },
    {
      path: '/releaseSearch',
      name: 'releaseSearch',
      component: releaseSearch
    },
    {
      path: '/userInformation',
      name: 'userInformation',
      component: userInformation
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