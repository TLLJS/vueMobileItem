<template>
  <swiper>
    <swiper-item v-for="(item, index) of banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad"/>
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data(){
    return {
      status:false
    }
  },
  methods:{
    //由于图片可能加载太慢，导致offsetTop获取错误，因此需要监听图片加载完之后在获取offsetTop属性
    imageLoad(){
      //由于图片有4张，但只需加载完成一张就行，所以图片加载完成只需发送一次即可
      if (!this.status){
        this.$emit('SwiperImageLoad')
        this.status=true
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>
<style scoped>
</style>