<template>
	<div style="width: 300px; border: 1px solid blue;">
		<!--<el-button @click='api'>调用express写的接口</el-button><br />-->
		<!--<p>我是vuex里存的name的值:{{this.$store.state.name}}</p>-->
		<!--<p>我是vuex里的getters的值:{{this.$store.getters.get_name}}</p>-->
		<!--<el-button @click='submit'>点击我提交mutations把name变成于春辉</el-button><br />-->
		<!--<el-button @click='action'>点击我提交action把name变成yuchunhui</el-button>-->
		<!--<fasong></fasong>-->
		<!--<jieshou></jieshou>-->
    <div>取值:{{this.$route.query.id}}</div>
  </div>
</template>

<script>
	//	必须加{}因为导出是export 不是 export default
	// import { add } from "@/api/jiekou"
	import fasong from "@/mycomponent/test_zongxian/fasong"
	import jieshou from "@/mycomponent/test_zongxian/jieshou"

	export default {
		data: function() {
			return {
        chart: null,
			}
		},
    mounted() {

    },
		components:{
			fasong,
			jieshou,
		},
		methods: {
			submit() {
				this.$store.commit('sets', '于春辉')
        console.dir(this.ajax)

			},
			action() {
				this.$store.dispatch('action')
      },
			api() {
				// add({
				// 	"name": '11'
				// }).then(res => {
				// 	console.log(res)
				// }).catch(err => {
				// 	// alert(err)
				// })
        this.ajax({
          //	代理拿到外面的方式
          // baseURL: window.configUrl[process.env.NODE_ENV].TEST_URL,
          // baseURL: process.env.TEXT_URL,
          url: '/api/btasys/btaPtdl/piechart',
          params:{selectYear:2019},
          //get请求把data变成params
          method: 'get',
        }).then(res=>{
          console.log(res)
        }).catch(err=>{

        })
			},

		}
	}
</script>

<style>


</style>
