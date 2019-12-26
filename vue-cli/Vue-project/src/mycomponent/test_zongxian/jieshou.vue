<template>
	<div>

	</div>
</template>

<script>
	import Bus from "@/units/zongxian";
	export default {
		mounted(){
			Bus.$on("fasong",data=>{
	    alert('总线方式接受到兄弟组件发送来的信息')
	})
		}
	}


</script>

<style>
</style>
