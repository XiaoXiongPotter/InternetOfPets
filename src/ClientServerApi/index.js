import http from '../api/public'
//添加宠物
export const addPet = (params) => {
	return http.fetchPost('/ClientServerApi/pets/info/addPet', params)
}