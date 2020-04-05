import {
	request
} from './request'

import formatterDateTime from './util'

export function getbanner() {
	return request({
		url: '/home/multidata'
	})
}
export function getcontent(type, page) {
	return request({
		params: {
			type: type,
			order: 1,
			page: page,
			"showapi_timestamp": formatterDateTime(),
			"showapi_appid": 168347, //这里需要改成自己的appid
			"showapi_sign": '44d436bebd1241fd9c6002f02fa76818', //这里需要改成自己的应用的密钥secret
		}
	})
}
