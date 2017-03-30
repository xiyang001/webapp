<template>
    <div>
        <ul class="tab">
          <li><router-link to="/news/top">头条</router-link></li>
          <li><router-link to="/news/shehui">社会</router-link></li>
          <li><router-link to="/news/guonei">国内</router-link></li>
          <li><router-link to="/news/guoji">国际</router-link></li>
          <li><router-link to="/news/tiyu">体育</router-link></li>
          <li><router-link to="/news/keji">科技</router-link></li>
          <li><router-link to="/news/caijing">财经</router-link></li>
        </ul>
        <transition name="slide">
          <router-view></router-view>
        </transition>
    </div>
</template>

<script type="text/javascript">

    export default{
        data(){
            return{

            }
        },
        created(){

        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .tab
    width 100%
    height 36px
    display flex
    line-height 36px
    position fixed
    top 0
    left 0
    z-index 300
    background #efefef
    li
      color #333
      flex auto
      text-align center
      justify-content space-around
      a
        display block
  .slide-enter-active
    transition all .5s ease cubic-bezier(0.68, -0.55, 0.27, 1.55)

  .slide-leave-active
    transition all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)

  .slide-enter, .slide-leave-active
    transform translateX(150px)
    opacity 0
</style>
