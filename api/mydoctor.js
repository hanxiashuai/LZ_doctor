import {
	request
} from '@/utils/request.js'

//获取关注列表
export function getMydoctor() {
	return request({
		url: '/my/getmydoctorlist',
		method: 'GET',
	})
}


//取消关注医生
export function delMyDoctor(data) {
	return request({
		url: '/my/delmydoctor',
		method: 'DELETE',
		data: {
			doctorid: data
		}
	})
}

//新增关注医生
export function addMyDoctor(data) {
	return request({
		url: '/my/addmydoctor',
		method: 'POST',
		data
	})
}
