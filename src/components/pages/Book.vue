<template>
    <div>
      <ul class="tab">
        <li><router-link to="/book/wenxue">中国文学</router-link></li>
        <li><router-link to="/book/lishi">历史</router-link></li>
        <li><router-link to="/book/zhexue">哲学</router-link></li>
        <li><router-link to="/book/jiaoyu">教育</router-link></li>
        <li><router-link to="/book/sanwen">散文</router-link></li>
        <li><router-link to="/book/mingzhu">经典名著</router-link></li>
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
