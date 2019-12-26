<template>
	<div style="height: 100%;">
    <div style="height: 60px;background: rgb(55, 171, 255);display: flex;justify-content: space-between;">
      <div style="display: flex;justify-content: center;align-items: center;margin-left: 15px;">
        <img src="../assets/logo.png" style="width: 50px;height: 50px;" alt="">
        <div>vue后台管理框架</div>
      </div>
      <div style="margin-right: 15px;display: flex;justify-content: center;align-items: center;">
        <img src="../assets/logo.png" style="width: 50px;height: 50px;" alt="">
        <img src="../assets/logo.png" style="width: 50px;height: 50px;" alt="">
        <div>于春辉</div>
      </div>

    </div>
    <div style="display: flex;height: calc(100% - 60px);">
        <el-menu
          class="el-menu-vertical-demo"
          :collapse="menu"
          :router="true"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <!--<div style="text-align: center">-->
          <!--<img src="../assets/me.jpg" alt="" style="width: 100px;height: 100px;border-radius: 50%;background: #fff;">-->
          <!--</div>-->
          <div style="text-align: right">
            <img src="../assets/logo.png" style="width: 20px;height: 20px;" alt="" @click="yincang">
          </div>

          <el-menu-item index="/home/echarts">
            <i class="el-icon-more-outline"></i>
            <span slot="title">echarts能力展示</span>
          </el-menu-item>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>vue框架的配置</span>
            </template>
            <el-menu-item index="/home/vuex">vuex</el-menu-item>
            <el-menu-item index="/home/all_line">总线方式组件传参</el-menu-item>
            <el-menu-item index="/home/ajax">vue接口</el-menu-item>

            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>

          </el-submenu>

        </el-menu>


      <div style="margin: 15px;background: #fff;flex: 1;overflow: auto;min-width: 800px;" class="roll">
          <router-view></router-view>
      </div>
    </div>
    <!--<el-container>-->
        <!-- 导航页面导航 -->



    <!--</el-container>-->


    <!--左侧菜单组件,传给子组件一个list-->
		<!--<sidebar :list='list'></sidebar>-->
		<!--<appmain></appmain>-->
	</div>

</template>

<script>
//	菜单栏组件是install全局注册的在main里use了
	import appmain from "@/mycomponent/appmain/appmain"
	export default {
//		引入main组件并注册私有组件
		components:{
			appmain
		},
    methods:{

      yincang(){
        this.menu = !this.menu
      }
    },

		data: function() {

			return {
			  menu:false,
//				list展示列表菜单
				list:  [
                    {
                        id:1,
                        label:"1级目录1",
                        show:false,
                        children:[
                            {
                                id:"1-1",
                                label:"1.1目录"
                            },
                            {
                                id:"1-2",
                                label:"1.2目录"
                            },
                            {
                                id:"1-3",
                                label:"1.3目录"
                            },
                        ]
                    },
                    {
                        id:2,
                        label:"1级目录2",
                        show:false
                    },
                    {
                        id:3,
                        label:"1级目录3",
                        show:false,
                        children:[
                            {
                                id:"3-1",
                                label:"3.1目录"
                            },
                            {
                                id:"3-2",
                                label:"3.2目录",
                                show:false,
                                children:[
                                    {
                                        id:"3-2-1",
                                        label:"3.2.1目录"
                                    },
                                    {
                                        id:"3-2-2",
                                        label:"3.2.2目录"
                                    },
                                    {
                                        id:"3-2-3",
                                        label:"3.2.3目录"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id:4,
                        label:"1级目录4",
                        show:false,
                        children:[
                            {
                                id:"4-1",
                                label:"4.1目录"
                            },
                            {
                                id:"4-2",
                                label:"4.2目录",
                                show:false,
                                children:[
                                    {
                                        id:"4-2-1",
                                        label:"4.2.1目录"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id:5,
                        label:"1级目录5",
                        show:false,
                        children:[
                            {
                                id:"5-1",
                                label:"5.1目录",
                                show:false,
                                children:[
                                    {
                                        id:"5-1-1",
                                        label:"5.1.1目录"
                                    },
                                    {
                                        id:"5-1-2",
                                        label:"5.1.2目录",
                                        show:false,
                                        children:[
                                            {
                                                id:"5-1-2-1",
                                                label:"5.1.2.1目录"
                                            },
                                        ]
                                    }
                                ]
                            },
                            {
                                id:"5-2",
                                label:"5.2目录",
                                show:false
                            }
                        ]
                    },
                ],
			}
		},
	}
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
  }
  .roll{
    /*三角箭头的颜色*/
    scrollbar-arrow-color:rgb(15,112,126);
    /*滚动条滑块按钮的颜色*/
    scrollbar-face-color:rgb(15,112,126);
    /*滚动条整体颜色*/
    scrollbar-highlight-color: rgb(12,43,65);
    /*滚动条阴影*/
    scrollbar-shadow-color: rgb(12,43,65);
    /*滚动条轨道颜色*/
    scrollbar-track-color: rgb(12,43,65);
    /*滚动条3d亮色阴影边框的外观颜色——左边和上边的阴影色*/
    scrollbar-3dlight-color:#0099dd;
    /*滚动条3d暗色阴影边框的外观颜色——右边和下边的阴影色*/
    scrollbar-darkshadow-color: #0099dd;
    /*滚动条基准颜色*/
    scrollbar-base-color: #0099dd;
  }
  .roll::-webkit-scrollbar {
    height: 30px;
    background-color: rgb(12,43,65);
  }
  .roll::-webkit-scrollbar-thumb {
    background-color: rgb(15,112,126);
    border-radius: 6px;
  }
  .roll::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgb(15,112,126);
    background-color:rgb(20,59,77);
  }
</style>
