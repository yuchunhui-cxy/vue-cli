<template>
	<div>
		<button @click="btn">总线方式发送信息给兄弟组件</button>
	</div>
</template>

<script>

	import Bus from "@/units/zongxian";
	export default{
		methods:{
			btn(){

				Bus.$emit("fasong",111)
			}
		}
	}

</script>

<style>
</style>
