<template>
    <div>
      <ul class="movieList">
        <li v-for="item in movieList">
          <div class="images">
            <img :src="item.images.medium">
          </div>
          <div class="info">
            <div>
              片名：{{item.title}}
            </div>
            <div>
              导演： <span v-for="item in item.directors">{{item.name}}</span>
            </div>
            <div>
              年份：{{item.year}}
            </div>
            <div class="actor">
              主演：<span v-for="name in item.casts">{{name.name}}</span>
            </div>
            <div class="type">
              类型：
              <el-tag v-for="type in item.genres" type="primary">{{type}}</el-tag>
            </div>
            <div>
              评分：
              <el-rate
                class="rating"
                :value="Number((item.rating.average/2).toFixed(1))"
                disabled
                show-text
                text-color="#ff9900">
              </el-rate>
            </div>
            <a :href="item.alt" class="more">更多》</a>
          </div>
        </li>
      </ul>
    </div>
</template>

<script type="text/javascript">

    export default{
        data(){
            return{
              movieList:[]
            }
        },
        created(){
          this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters')
            .then(res => {
              this.movieList=res.body.subjects
            })
        }

    }
</script>
<style lang="stylus">
  .movieList
    padding-top 38px
    li
      width 100%
      height 170px
      padding 5px
  .images
    float left
    margin-right 5px
    img
      width 100px
      height 140px
  .info
    div
      margin:5px 0;
    .actor,.type
      span
        margin-right 5px
        color grey
  .more
    float right

</style>
