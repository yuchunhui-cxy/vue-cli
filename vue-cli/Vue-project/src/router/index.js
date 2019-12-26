import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
	//	如果是根路由重定向到develop
	routes: [{
			path: '/',
			redirect: '/home/index',
		},
		{
			path: '/home',
			component: () => import("@/views/layout"),
			children: [{
				path: 'index',
				component: () => import("@/views/index"),
				children: [{
					name: "index1",
					path: 'index1',
					component: () => import("@/views/index1"),
				},
        {
          name: "index2",
          path: 'index2:id',
          //    	替换index里的router-view
          component: () => import("@/views/index2"),
        }]
			},
        {
          path: 'echarts',
          component: () => import("@/views/echarts"),
        },
        {
          path: 'vuex',
          component: () => import("@/views/vuex"),
        },
        {
          path: 'all_line',
          component: () => import("@/views/all_line"),
        },
        {
          path: 'ajax',
          component: () => import("@/views/ajax"),
        }

      ]
		},
    {
      path:"*",
      component:() => import("@/views/not_find")

    }
	]
})




