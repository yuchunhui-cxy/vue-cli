<template>
	<div>
		<!--递归操作-->
        <div v-for = "(item,index) in list" :key = "index">
            <span @click='item.show=!item.show'>
               {{item.label}}
            </span>
            <sidebar v-if = "item.children && item.show" :list = "item.children" ></sidebar>
        </div>
	</div>
</template>

<script>
	export default {
		props: ['list'],
	}
</script>

<style>

</style>