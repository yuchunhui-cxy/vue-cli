<template>
	<div style="height: 520px;">
    <router-link to='/home/index/index1'>直接跳转</router-link>
    <router-link :to='{name:"index2",params:{id:"2"}}'>name跳转</router-link>
		<router-link :to='{path:"/home/index/index1",query:{id:"3"}}'>path跳转</router-link>
		<!--path和name带参数虽然写法大同小异,但是name要在路由上加:参数名,否则刷新之后获取不到参数-->
    <button @click="luyou">按钮跳转</button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        ws:"",
        list:[],
        input:"",
      }
    },
    methods:{
      luyou(){
        this.$router.push({path:"/home/index/index1",query:{id:"4"}})
      }
    }
  }
</script>

<style>
</style>
