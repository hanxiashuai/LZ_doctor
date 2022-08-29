import {
	request
} from '@/utils/request.js'

//获取用信息
export function getwxuserinfo(data) {
	return request({
		url: '/my/getwxuserinfo',
		method: 'GET'
	})
}

//编辑用户信息
export function editwxuserinfo(data) {
	return request({
		url: '/my/editwxuserinfo',
		method: 'POST',
		data
	})
}
