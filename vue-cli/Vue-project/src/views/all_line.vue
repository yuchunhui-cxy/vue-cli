<template>
    <div>
      <fasong></fasong>
      <jieshou></jieshou>
    </div>
</template>

<script>
  import fasong from "@/mycomponent/test_zongxian/fasong"
  import jieshou from "@/mycomponent/test_zongxian/jieshou"

  export default {
        name: "all_line",
        components:{
          fasong,
          jieshou,
        },
    }
</script>

<style scoped>

</style>
