<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide" style="width:100%"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carousel',
    props:['swiperSlides'],
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: true,//可选选项，自动滑动
        }
      }
    },
    mounted() {

    }
  }
</script>
