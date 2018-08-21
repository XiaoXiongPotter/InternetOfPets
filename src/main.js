// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import axios from 'axios'
import store from './store/store'
import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
// import VueI18n from 'vue-i18n'
// import LangEn from '../static/lang/en'
// import LangZhCHS from '../static/lang/zhCHS'

import 'element-ui/lib/theme-chalk/index.css'
import 'vue-directive-image-previewer/dist/assets/style.css'
Vue.config.productionTip = false


// 添加请求拦截器
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    //判断是否存在token，如果存在将每个页面header都添加token
    if (store.state.token) {
        config.headers.common['x-auth-token'] = store.state.token
    }
    if (store.state.resetToken) {
        config.headers.common['resetToken'] = store.state.resetToken
    }
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {

        if (error.response) {
            switch (error.response.status) {
                case 401:
                    this.$store.commit('del_token');
                    router.replace({
                        path: '/login',
                        query: { redirect: router.currentRoute.fullPath }//登录成功后跳入浏览的当前页面
                    })
            }
        }
        return Promise.reject(error.response.data)
    });
//多语言
// const i18n = new VueI18n({
//     locale: 'en', 
//     messages:{
//       'en': LangEn,
//       'zhCHS': LangZhCHS

//     }
//   })
/* eslint-disable no-new */
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(VueDirectiveImagePreviewer)
//Vue.use(VueI18n)
new Vue({
    el: '#app',
    router,
    store,
    // i18n,
    components: { App },
    template: '<App/>'
})

