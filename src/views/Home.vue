<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播图组件 -->
    <home-swiper :banners='banners' class="banner"></home-swiper>
    <!-- 推荐组件 -->
    <home-recommend :recommends='recommends'></home-recommend>
    <!-- 本地流行组件 -->
    <home-feature></home-feature>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from 'views/HomeSwiper'
import HomeRecommend from 'views/HomeRecommend'
import HomeFeature from 'views/HomeFeature'
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      // 首页轮播图数据
      banners:[],
      // 首页推荐数据
      recommends:[]
    };
  },
  created() {
    // 页面刚创建时发送请求获取数据
    this.getHomeDate();
    
  },
  methods: {
    // 获取首页数据
    async getHomeDate() {
      // 请求首页数据
      const url = "/home/multidata";
      const {data:res} = await this.axios.get(url);
      this.banners=res.data.banner.list
      this.recommends=res.data.recommend.list
    },
  },
  components: {
    NavBar,
    HomeRecommend,
    HomeSwiper,
    HomeFeature
  },
};
</script>
<style scoped>
#home{
  padding-top: 44px;
}
.home-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-tint);
  color: #fff;
  z-index: 99;
}
</style>
