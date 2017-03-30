<template>
  <Comm :result="result"></Comm>
</template>

<script type="text/javascript">
  import Comm from './Common.vue'
  export default{
    data(){
      return{
        result:[]
      }
    },
    components:{Comm},
    created(){
      this.$http.jsonp('http://www.freedt.cn/api/toutiao/index?call_key=58da0238fee76f16208f7835&type=top',{}, {
          headers: {},
          emulateJSON: true
        }
      ).then(function(res){
        this.result=res.body.result.data;
      })
    }
  }
</script>
<style lang="stylus">

</style>
