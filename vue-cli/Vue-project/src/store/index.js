import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		name:"我是vuex"
	},
	mutations:{
		sets(state,data){
			state.name = data
		}
	},
	getters:{
		get_name:state=>state.name+'的'+'getters'
	},
	actions:{
		action({commit}){
//			异步操作但实际上还是提交mutations改变state的值
			commit('sets',"yuchunhui")
		}
	}
})
