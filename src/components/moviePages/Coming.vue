<template>
  <Comm :movieList="movieList"></Comm>
</template>

<script type="text/javascript">
  import Comm from './Common.vue'
  export default{
    data(){
      return{
        movieList:[]
      }
    },
    components:{Comm},
    created(){
      this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon')
        .then(res => {
          this.movieList=res.body.subjects
        })
    }

  }
</script>

