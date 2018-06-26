import http from './public'
// 登陆
export const userLogin = (params) => {
  return http.fetchPost('/api/authentication/form', params)
}
// 注册账号
export const register = (params) => {
  return http.fetchPost('/api/petUser', params)
}
