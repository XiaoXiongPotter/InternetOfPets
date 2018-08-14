import http from '../api/public'
//获取所有宠物
export const getpet = () => {
	return http.fetchPost('/ClientServerApi/pets/info/listPetByOwner')
}
//删除宠物
export const deletepet = (params) => {
	return http.fetchPost('/ClientServerApi/pets/info/deletePet',params)
}
//添加宠物
export const addPet = (params) => {
	return http.fetchPost('/ClientServerApi/pets/info/addPet',params)
}
//修改宠物
export const updatePet = (params) => {
	return http.fetchPost('/ClientServerApi/pets/info/updatePet',params)
}
//获取附近协寻列表
export const nearSearch = (params) => {
	return http.fetchPost('/ClientServerApi/ClientServer/qr/nearSearch',params)
}
//获取宠物设备
export const getPetDevices = (params) => {
	return http.fetchPost('/ClientServerApi/devices/listByPet',params)
}
//发布协寻
export const addPublish = (params) => {
	return http.fetchPost('/ClientServerApi/pets/search/addPublish',params)
}