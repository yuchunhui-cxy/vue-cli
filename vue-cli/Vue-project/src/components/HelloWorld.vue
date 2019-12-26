<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Essential Links</h2>
		<ul>
			<li>
				<a href="https://vuejs.org" target="_blank">
					Core Docs
				</a>
			</li>
			<li>
				<a href="https://forum.vuejs.org" target="_blank">
					Forum
				</a>
			</li>
			<li>
				<a href="https://chat.vuejs.org" target="_blank">
					Community Chat
				</a>
			</li>
			<li>
				<a href="https://twitter.com/vuejs" target="_blank">
					Twitter
				</a>
			</li>
			<br>
			<li>
				<a href="http://vuejs-templates.github.io/webpack/" target="_blank">
					Docs for This Template
				</a>
			</li>
		</ul>
		<h2>Ecosystem</h2>
		<ul>
			<li>
				<a href="http://router.vuejs.org/" target="_blank">
					vue-router
				</a>
			</li>
			<li>
				<a href="http://vuex.vuejs.org/" target="_blank">
					vuex
				</a>
			</li>
			<li>
				<a href="http://vue-loader.vuejs.org/" target="_blank">
					vue-loader
				</a>
			</li>
			<li>
				<a href="https://github.com/vuejs/awesome-vue" target="_blank">
					awesome-vue
				</a>
			</li>
		</ul>
		<div id="myChart" style="width: 500px; height: 300px;"></div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		mounted() {
			this.drawLine();
		},
		methods: {
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				// 绘制图表
				myChart.setOption({
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: [820, 932, 901, 934, 1290, 1330, 1320],
						type: 'line'
					}]
				});
			
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
</style>