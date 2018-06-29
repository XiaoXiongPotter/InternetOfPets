import http from './public'
// 登陆
export const userLogin = (params) => {
  return http.fetchPost('/api/authentication/form', params)
}
// 注册账号
export const register = (params) => {
  return http.fetchPost('/api/register', params)
}
//手机验证码
export const mobile = (params) => {
	return http.fetchPost('/api/authentication/mobile', params)
}
//发送验证码
export const Verification = (params) => {
	return http.fetchGet('/api/code/sms?mobile=13713098798', params)
}
//忘记密码
export const forget = (params) => {
	return http.fetchPost('/api/update_password', params)
}