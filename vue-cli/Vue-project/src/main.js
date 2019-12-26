// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
//以上四行是自带的

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//以上三行是导入elementui

import echarts from 'echarts'
Vue.prototype.$echarts = echarts
//以上俩行是导入echarts

import sidebar from './mycomponent/sidebar'
Vue.use(sidebar)
//以上是全局注册左侧菜单栏组件

import store from './store'
//以上一行是导入store

/* eslint-disable no-new */

import axios from './axios'
Vue.prototype.ajax = axios

//补充:@是src,如果要导入文件夹下的index.js,可以省略不写
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
//注意:这里不是把App组件放到了index.html的div中,而是相当于用App里的div把index.html的div替换了
//template可以改写成
//render:function(c){
//	return c(App)
//}
