import http from '../api/public'

//获取用户名下所有设备列表
export const getDevices = () => {
	return http.fetchPost('/deviceApi/devices/listByLoginUser')
}