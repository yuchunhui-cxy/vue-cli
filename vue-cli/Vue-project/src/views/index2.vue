<template>
  <div style="background:blue">
    <el-button @click="btn">点击查看参数</el-button>
    <div>
      <div>

        <p v-for="(item,index) in list" :key="index">
          {{item}}
        </p>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button @click="websocket">发送</el-button>



      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "index2",
        data(){
          return{
            ws:"",
            list:[],
            input:"",
          }
        },
        created() {
  //			链接websocket
  //         this.ws = new WebSocket('ws://localhost:2333')
        },
        methods:{
          websocket() {

//				发送消息给websocket
            this.ws.send(this.input)
            this.input = ""
//				接受websocket的值
            this.ws.onmessage = e=>{
              this.list.push(e.data)
            }
          },
          btn(){
            alert(this.$route.params.id)
          }
        }
    }
</script>

<style scoped>

</style>
