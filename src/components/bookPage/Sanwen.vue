<template>
  <Comm :books="books"></Comm>
</template>

<script type="text/javascript">
  import Comm from './Common.vue'
  export default{
    data(){
      return{
        books:[]
      }
    },
    components:{Comm},
    created(){
      this.$http.jsonp('https://api.douban.com/v2/book/search?q=散文&count=50')
        .then(res => {
          this.books=res.body.books
        })

    }
  }
</script>
