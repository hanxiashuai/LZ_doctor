import {
	request
} from '@/utils/request.js'

//获取用户地址
export function getUserAddress(data) {
	return request({
		url: '/my/useraddress',
		method: 'GET',
		data: {
			id: data
		}
	})
}

//获取一条用户地址
export function getAnAddress(data) {
	return request({
		url: '/my/anaddress',
		method: 'GET',
		data: {
			id: data
		}
	})
}

//删除用户地址
export function delUserAddress(data) {
	return request({
		url: '/my/deluseraddress',
		method: 'DELETE',
		data: {
			id: data
		}
	})
}

//编辑用户地址
export function editUserAddress(data) {
	return request({
		url: '/my/edituseraddress',
		method: 'POST',
		data
	})
}

//新增用户地址
export function addUserAddress(data) {
	return request({
		url: '/my/adduseraddress',
		method: 'POST',
		data
	})
}



//获取省名称
export function getProvinces() {
	return request({
		url: '/my/getprovinces',
		method: 'GET',
	})
}

//获取市名称
export function getCities(data) {
	return request({
		url: '/my/getcities',
		method: 'GET',
		data: {
			provinceid: data
		}
	})
}

//获取县名称
export function getAreas(data) {
	return request({
		url: '/my/getareas',
		method: 'GET',
		data: {
			cityid: data
		}
	})
}