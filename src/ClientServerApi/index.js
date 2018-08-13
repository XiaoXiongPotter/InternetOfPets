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