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
import deviceManage from '../m_page/home/deviceManage.vue'
import tag from '../m_page/home/tag.vue'
import addDevice from '../m_page/home/addDevice.vue'
import createQrCode from '../m_page/home/createQrCode.vue'
import connectDevice from '../m_page/home/connectDevice.vue'
import mypet from '../m_page/myAccount/mypet.vue'
import mysearch from '../m_page/myAccount/mysearch.vue'
import releaseSearch from '../m_page/finder/releaseSearch.vue'
import userInformation from '../m_page/myAccount/userInformation.vue'
import changePet from "../components/changepet.vue"
import editpet from '../m_page/myAccount/editpet.vue'
import changepassword from '../m_page/myAccount/changepassword.vue'
import commonproblem from '../m_page/myAccount/commonproblem.vue'
import loginauthorization from '../m_page/myAccount/loginauthorization.vue'
import binddevice from '../components/binddevice.vue'
import addpet from '../m_page/myAccount/addpet.vue'
import guide from '../m_page/finder/guide.vue'
import qrPindFet from '../m_page/finder/qrFindPet.vue'
import qrFindError from '../m_page/finder/qrFindError.vue'
import findPetInfo from '../m_page/finder/findPetInfo.vue'
import petDetails from '../m_page/finder/petDetails.vue'
import changefindpetinfo from '../m_page/myAccount/changefindpetinfo.vue'
import OperationGuide from '../m_page/myAccount/OperationGuide.vue'
import store from '../store/store.js'
//import collor from '../m_page/home/collor/necklace_map.html'
Vue.use(Router)
if (sessionStorage.getItem('token')) {
  store.commit('set_token', sessionStorage.getItem('token'))
}
const router = new Router({
// mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      // meta:{
      //   requireAuth:true
      // }
    },
    //登录，注册
    {
      path: '/login',
      name: 'login',
      component: login
    },
    //注册
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
    //设备管理
    {
      path: '/deviceManage',
      name: 'deviceManage',
      component: deviceManage
    },
    {
      path: '/tag',
      name: 'tag',
      component: tag
    },
    
    //设备切换绑定宠物
    {
      path: '/changepet',
      name: 'changePet',
      component: changePet
    },
    //设备连接
    {
      path: '/connectDevice',
      name: 'connectDevice',
      component: connectDevice
    },
    //添加设备
    {
      path: '/addDevice',
      name: 'addDevice',
      component: addDevice
    },
    //协寻
    {
      path: '/finder',
      name: 'finder',
      component: finder
    },{
      path: '/guide',
      name: 'guide',
      component: guide
    },
    //我的
    {
      path: '/myAccount',
      name: 'account',
      component: account
    },
    //我的宠物
    {
      path: '/mypet',
      name: 'mypet',
      component: mypet
    },
    //我的协寻
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
    //用户信息
    {
      path: '/userInformation',
      name: 'userInformation',
      component: userInformation
    },
    //重置密码
    {
      path: '/resetpassword',
      name: 'resetpassword',
      component: resetpassword
    },
    //重置成功
    {
      path: '/resetsuccess',
      name: 'resetsuccess',
      component: resetsuccess
    },
    //注册失败
    {
      path: '/registerfalse',
      name: 'registerfalse',
      component: registerfalse
    },
    //添加宠物
    {
    	path: '/addpet',
      name: 'addpet',
      component: addpet
    },
    //修改密码
     {
      path: '/changepassword',
      name: 'changepassword',
      component: changepassword
    },
    //编辑宠物信息
     {
      path: '/editpet',
      name: 'editpet',
      component: editpet
    },
    //常见问题
     {
      path: '/commonproblem',
      name: 'commonproblem',
      component: commonproblem
    },
    //登陆授权
     {
      path: '/loginauthorization',
      name: 'loginauthorization',
      component: loginauthorization
    },
    //绑定设备
     {
      path: '/binddevice',
      name: 'binddevice',
      component: binddevice
    },
    //生成二维码
    {
      path: '/createQrCode',
      name: 'createQrCode',
      component: createQrCode
    },
    //扫码显示宠物信息--已协寻
    {
      path: '/qrFindPet',
      name: 'qrFindPet',
      component: qrPindFet
    },
    //扫码报错页
    {
      path: '/qrFindError',
      name: 'qrFindError',
      component: qrFindError
    },
    //扫码显示宠物信息--未协寻
    {
      path: '/findPetInfo',
      name: 'findPetInfo',
      component: findPetInfo
    },
    //协寻详细信息
    {
      path: '/petDetails',
      name: 'petDetails',
      component: petDetails
    },
    //修改协寻信息
    {
      path: '/changefindpetinfo',
      name: 'changefindpetinfo',
      component: changefindpetinfo
    },
    //操作指南
    {
    	 path: '/OperationGuide',
      name: 'OperationGuide',
      component: OperationGuide
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
        query: { redirect: to.fullPath }
      })
    }
  }
  else {
    next();
  }
})
export default router
