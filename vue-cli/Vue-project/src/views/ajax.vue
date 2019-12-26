<template>
  <div>
    <el-button @click='api'>调用接口</el-button>
  </div>
</template>

<script>
        export default {
          name: "ajax",
          methods:{
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
                url: '/abc',
                data:{name:"我是前端"},
                //params:{selectYear:2019},
                //get请求把data变成params
                method: 'post',
              }).then(res=>{
                console.log(res)
              }).catch(err=>{

              })
            },

          }
        }
</script>

<style scoped>

</style>
