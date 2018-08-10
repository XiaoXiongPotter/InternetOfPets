import http from '../api/public'

//获取用户名下所有设备列表
export const getDevices = () => {
	return http.fetchPost('/deviceApi/devices/listByLoginUser')
}
//通过Uid获取设备信息
export const getDevicesInfo = (params) => {
	return http.fetchPost('/ClientServerApi/devices/detail',params)
}