<template>
    <div>
      <div>
        <ul class="tab">
          <li><router-link to="/movie/hot">正在热映</router-link></li>
          <li><router-link to="/movie/top">top250</router-link></li>
          <li><router-link to="/movie/new">新片榜</router-link></li>
          <li><router-link to="/movie/coming">即将上映</router-link></li>
          <li><router-link to="/movie/search">搜索<i class="iconfont icon-sousuo"></i></router-link></li>
        </ul>
        <transition name="slide">
          <router-view></router-view>
        </transition>
      </div>
    </div>
</template>
<style>

</style>
<script>

    export default{
        data(){
            return{
                msg:'电影'
            }
        }

    }
</script>
