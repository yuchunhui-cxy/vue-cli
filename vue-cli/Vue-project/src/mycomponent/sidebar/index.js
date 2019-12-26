import sidebar from './sidebar'
//install的方式注册组件
const sb = {
	install:function(Vue){
		Vue.component('sidebar',sidebar)
	}
}
export default sb