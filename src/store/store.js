import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: '',
        resetToken: ''
    },
    mutations: {
        set_token(state, token) {
            state.token = token
            sessionStorage.token = token
        },
        del_token(state) {
            state.token = ''
            sessionStorage.removeItem('token')
        },
        res_token(state, resetToken) {
            state.resetToken = resetToken
            sessionStorage.resetToken = resetToken
            state.token = ''
            sessionStorage.removeItem('token')
        }
    }
})