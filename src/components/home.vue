<template>
    <div>
      <myhead :back="false">首页</myhead>

      <div class="content">
        <swiper :swiperSlides="sliders"></swiper>
        <div class="container">
          <h3 class="title">热门图书</h3>
          <ul class="books">
              <li v-for="item in hotbooks"><img :src="item.bookCover" style="width:100%" /><b>{{item.bookName}}</b></li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
  import myhead from "../base/myhead"
  import swiper from "../base/swiper"
  import {getsliders,gethotbook} from "../api"
    export default {
        data() {
            return {
              sliders:[],
              hotbooks:[]
            }
        },
        methods: {
            async getslider(){
              let {data:sliders} = await getsliders();
              this.sliders = sliders;
            },
            async getHot(){
              let {data} = await gethotbook();
              this.hotbooks = data;
            }
        },
        computed: {},
        components: {
          myhead,
          swiper
        },
        created(){
            this.getHot();
            this.getslider();
        }
    }
</script>
<style scoped lang="less">
    .books {
        display: flex;
        width:100%;
        flex-wrap:wrap;
        li{
            width:50%;
            text-align:center;
            margin:5px 0;
        }
    }
    .container{
      width:90%;
      margin:0 auto;
      .title{
        color:#666;
        margin:20px 0;
      }
    }
</style>
