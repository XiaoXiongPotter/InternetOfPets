import http from './public'
// 登陆
export const userLogin = (params) => {
  return http.fetchPost('/api/authentication/form', params)
}
// 注册账号
export const register = (params) => {
  return http.fetchPost('/api/register', params)
}
// 手机注册
export const registerByMobile = (params) => {
  return http.fetchPost('/api/registerByMobile', params)
}
//手机验证码
export const mobile = (params) => {
	return http.fetchPost('/api/authentication/mobile', params)
}
//发送验证码
export const Verification = (params) => {
	return http.fetchGet('/api/code/sms?mobile='+params)
}
//忘记密码
export const updatePasswordByMobile = (params) => {
	return http.fetchPost('/api/updatePasswordByMobile', params)
}
//判断用户是否存在
export const judge = (params) => {
	return http.fetchGet('/api/petUser/exist_user/'+params)
}