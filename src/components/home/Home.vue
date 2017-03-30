<template>
  <div class="content">
    <div class="menu-icon iconfont icon-caidan" @click="target"></div>
    <div class="menu" v-if="flag">
      <div @click="closemenu">
        <router-link to="/news"><i class="iconfont icon-icontoutiao"></i>头条</router-link>
      </div>
      <div @click="closemenu">
        <router-link to="/movie"><i class="iconfont icon-dianying"></i>电影</router-link>
      </div>
      <div @click="closemenu">
        <router-link to="/music"><i class="iconfont icon-yinle"></i>音乐</router-link>
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/javascript">
      export default {
        data () {
          return {
            msg:'Hello Vue',
            flag:false
          }
        },
        methods:{
          target:function(){
            this.flag=!this.flag
          },
          closemenu:function(){
            this.flag=false;
          }
        }

    }
</script>
<style>
  html,body{ height:100%;padding:0;margin:0;}
  .content{position: absolute;left: 0;top: 0;right: 0;bottom: 0;overflow:hidden;}
  .menu{
      width:120px;
      height:100%;
      position:absolute;
      z-index:200;
      left:0;
      top:0;
      background:rgba(0,0,0,.5);
      overflow-y:scroll;
      padding-top:40px;
  }
  ::-webkit-scrollbar {/*隐藏滚轮*/
    display: none;
  }
  .menu>div{width:100%;height:40px;line-height:40px;}
  .menu>div a{display:block;width:100%;height:100%;color:#999;font-size:18px;padding-left:17px;}
  .menu>div a .iconfont{margin-right:4px;}
  .menu-icon{width:40px;height:40px;position:absolute;z-index:240;left:15px;top:15px;font-size:24px;color:#999;}
  .main{width:100%;height:100%;overflow-y:scroll;}
</style>
