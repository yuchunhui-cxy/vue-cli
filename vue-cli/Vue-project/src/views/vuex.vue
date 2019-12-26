<template>
    <div>
      <p>我是vuex里存的name的值:{{this.$store.state.name}}</p>
      <p>我是vuex里的getters的值:{{this.$store.getters.get_name}}</p>
      <el-button @click='mutations'>点击我提交mutations把name变成于春辉</el-button><br />
      <el-button @click='action'>点击我提交action把name变成yuchunhui</el-button>
    </div>
</template>

<script>
    export default {
        name: "vuex",
      methods: {
        mutations() {
          this.$store.commit('sets', '于春辉')
        },
        action() {
          this.$store.dispatch('action')
        },

      }
    }
</script>

<style scoped>

</style>
