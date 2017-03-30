<template>
    <ul class="itemBox">
      <li v-for="list in result">
        <div class="item">
          <img :src="list.thumbnail_pic_s">
          <a :href="list.url"></a>
          <div>
            <p>{{list.title}}</p>
            <p><span>{{list.author_name}}</span><span>{{list.date}}</span></p>
          </div>
        </div>
      </li>
    </ul>
</template>

<script type="text/javascript">
    export default{
        props:{
          result:{
            type:Array
          }
        },
        data(){
            return{

            }
        }
    }
</script>
<style lang="stylus">
  .itemBox
    padding-top 38px
    li
      padding:8px
  .item
    width:100%
    position:relative
    img
      width:100%
      border-radius:5px
    a
      display block
      width 100%
      height 100%
      position absolute
      top 0
      left 0
      background transparent
      z-index 100
    div
      background:rgba(0,0,0,.5)
      color:#fff
      width:100%
      height:50px
      position:absolute
      left:0px
      bottom:0px
      border-radius:5px
      padding:5px
      line-height:20px
      p
        text-overflow:ellipsis
        overflow:hidden
        white-space:nowrap
        span
          margin-right 5px

</style>
