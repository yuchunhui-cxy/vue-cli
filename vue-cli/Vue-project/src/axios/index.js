import axios from 'axios'
// 创建axios实例
const service = axios.create({
//	把配置文件拿到静态文件中就不走config里的dev了
// 	baseURL: window.configUrl[process.env.NODE_ENV].TEXT_URL,
  baseURL: process.env.TEXT_URL
})

// 添加request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})
// 添加respone拦截器
service.interceptors.response.use(
  response => {
  let res={};
  res.status=response.status
  res.data=response.data;
  return res.data.data;
},
error => {
  if(error.response && error.response.status == 404){
    alert("接口出现问题")
  }else if(error.response.status == 504){
    alert("服务器异常")
  }
  return Promise.reject(error.response)
}
)
export default service
