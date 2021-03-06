
import http from '../api/public'

//获取用户名下所有设备列表
export const getDevices = () => {
	return http.fetchPost('/ClientServerApi/devices/listByLoginUser')
}
//通过获取设备详细信息
export const getDevicesInfo = (params) => {
	return http.fetchPost('/ClientServerApi/devices/detail',params)
}
//设备绑定宠物
export const bindPet = (params) => {
	return http.fetchPost('/ClientServerApi/base/device/bindPet',params)
}
//生成绑定二维码

export const createQrCode = (params) => {
	return http.fetchPost('/deviceApi/devices/getQrCode',params)
}
//绑定设备

export const bindDevice = (params) => {
	return http.fetchPost('/deviceApi/devices/bind',params)
}
//解绑设备

export const unbindDevice = (params) => {
	return http.fetchPost('/deviceApi/devices/unbind',params)
}