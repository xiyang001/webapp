<template>
  <div class="bookBox">
    <ul class="bookList">
      <li v-for="book in books">
        <img :src="book.images.large">
        <div class="bookname">
          书名：{{book.title}}
        </div>
        <div class="bookname">
          作者：{{book.author[0]}}
        </div>
        <div>
          评分：
          <el-rate
            class="rating"
            :value="Number((book.rating.average/2).toFixed(1))"
            disabled
            show-text
            text-color="#ff9900">
          </el-rate>
        </div>
        <div class="summary">简介：{{book.summary}}</div>
        <a :href="book.alt" class="more">更多》</a>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">

    export default{
        props:{
          books:{
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
  .bookBox
    padding-top 38px
  .bookList
    width 100%
    li
      width 50%
      display inline-block
      padding 5px
      img
        width 100%
        height 280px
        border solid 1px #ccc
        border-radius 5px
    .bookname
      text-overflow ellipsis
      overflow hidden
      white-space nowrap
    div
      margin 3px 0px
    .summary
      position: relative;
      line-height: 20px;
      max-height: 40px;
      overflow: hidden;
    .summary::after
      content: "...";
      position: absolute;
      bottom: 0;
      right: 0;
      padding-left: 40px;
      background: -webkit-linear-gradient(left, transparent, #fff 55%);
      background: -o-linear-gradient(right, transparent, #fff 55%);
      background: -moz-linear-gradient(right, transparent, #fff 55%);
      background: linear-gradient(to right, transparent, #fff 55%);
    .more
      float right


</style>
