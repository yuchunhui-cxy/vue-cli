import axios from '@/axios'
export function add(data) {
	return axios({
    //	代理拿到外面的方式
    // baseURL: window.configUrl[process.env.NODE_ENV].TEST_URL,
    // baseURL: process.env.TEXT_URL,
		url: '/api/btasys/btaPtdl/piechart',
		data:data,
		method: 'get',
	})

}
