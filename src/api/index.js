import http from './public'
// 登陆
export const userLogin = (params) => {
  return http.fetchPost('/api/authentication/form', params)
}
// 邮箱注册账号
export const registerSendEmail = (params) => {
  return http.fetchPost('/api/registerSendEmail', params)
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
	return http.fetchPost('/api/code/sms?mobile='+params)
}
//忘记密码
export const updatePasswordByMobile = (params) => {
	return http.fetchPost('/api/updatePasswordByMobile', params)
}
//判断用户是否存在
export const email = (params) => {
	return http.fetchPost('/api/petUser/exist_user?account='+params)
}
//重置密码提交
export const submitpassword = (params) => {
	return http.fetchPost('/api/update_password', params)
}
//邮箱重置链接
export const sendreset = (params) => {
	return http.fetchPost('/api/send_reset_pass_link', params)
}

export const systemInit = () => {
	return http.fetchPost('/api/systemInit')
}
//图形验证码
export const getimg = () => {
	return http.fetchPost('/api/code/image?width=100')
}