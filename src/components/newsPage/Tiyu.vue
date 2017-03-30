<template>
  <Comm :result="result"></Comm>
</template>
<style>

</style>
<script type="text/javascript">
  import Comm from './Common.vue'
  export default{
    data(){
      return{
        type:'',
        result:[]
      }
    },
    components:{Comm},
    created(){
      this.type=this.$route.path.slice(6);
      this.$http.jsonp('http://www.freedt.cn/api/toutiao/index?call_key=58da0238fee76f16208f7835&type='+this.type,{}, {
          headers: {},
          emulateJSON: true
        }
      ).then(function(res){
        this.result=res.body.result.data;
      })
    }
  }
</script>
