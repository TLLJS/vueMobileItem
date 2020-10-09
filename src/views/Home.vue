<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll
      class="content"
      ref="scrolls"
      :probeType="3"
      @scroll="handelScroll"
      :pullingLoad="true"
      @pullingUp="loadMore"
    >
      <!-- 轮播图组件 -->
      <home-swiper :banners="banners" class="banner" @SwiperImageLoad="SwiperImageLoad"></home-swiper>
      <!-- 推荐组件 -->
      <home-recommend :recommends="recommends"></home-recommend>
      <!-- 本地流行组件 -->
      <home-feature></home-feature>
      <!-- 商品列表-->
      <tab-control
        ref="tabControl"
        :titles="['流行', '新款', '精选']"
        @navigation="handelNavigation"
        :class="{fixed:isTabFixed}"
      ></tab-control>
      <good-list :goods="goods[currenttime].list"></good-list>
    </scroll>
    <!-- 返回顶部组件 -->
    <!--  想要监听自定义组件的原生事件，必须添加native修饰符-->
    <back-top @click.native="handelbacktop" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/TabControl";
import GoodList from "components/content/goods/GoodsList";
import Scroll from "components/common/bscroll/Scroll";
import BackTop from "components/content/backtop/BackTop";
import {debounce} from 'common/ulits/dehouse'

import HomeSwiper from "views/HomeSwiper";
import HomeRecommend from "views/HomeRecommend";
import HomeFeature from "views/HomeFeature";
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      // 首页轮播图数据
      banners: [],
      // 首页推荐数据
      recommends: [],
      // 商品数据
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      //记录当前滚动的距离，当跳转到其他页面再跳回来时可以显示跳转时的位置
      saveY:0,
      // 根据handelNavigation(index)控制商品数据中type的类型
      currenttime: "pop",
      // 控制返回顶部按钮的显示与隐藏
      isShow: false,
    //  tabControl组件滚动的距离
      tabControlOffsetTop:0,
    //  判断tabControl组件是否需要吸顶
      isTabFixed:false
    };
  },
  created() {
    // 页面刚创建时发送请求获取数据
    this.getHomeDate();
    // 页面刚创建时发送请求获取数据
    this.getGoodsDate("pop");
    this.getGoodsDate("new");
    this.getGoodsDate("sell");
  },
  mounted() {
    const refresh=debounce(this.$refs.scrolls.refresh,1000)
    //  监听GoodlistItem中图片加载完的事件
    this.$bus.$on('itemImageLoad',()=>{
      refresh()
    })
  },
  //返回该组件时触发
  activated() {
    this.$refs.scrolls.scrollTo(0,this.saveY,0)
    this.$refs.scrolls.refresh()
  },
  //离开该组件时触发
  deactivated() {
    this.saveY=this.$refs.scrolls.scroll.y
  },
  methods: {
    //监听子组件HomeSwiper传递过的事件
    SwiperImageLoad(){
      //this.$refs.tabControl.$el获取tabControl组件中的标签
      this.tabControlOffsetTop=this.$refs.tabControl.$el.offsetTop
    },
    // 获取首页数据
    async getHomeDate() {
      // 请求首页数据
      const url = "/home/multidata";
      const { data: res } = await this.axios.get(url);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    },
    // 获取商品数据
    async getGoodsDate(type) {
      // 每次请求页码相应加1
      const page = this.goods[type].page + 1;
      const list = this.goods[type].list;
      const url = "/home/data";
      const { data: res } = await this.axios.get(url, {
        params: { type, page },
      });
      // 将获取的数据保存
      this.goods[type].list = list.concat(res.list);
      // 将data中页码加1
      this.goods[type].page += 1;
    },
    // 点击'流行', '新款', '精选'进行页面替换
    handelNavigation(index) {
      if (index == 0) {
        this.currenttime = "pop";
      } else if (index == 1) {
        this.currenttime = "new";
      } else if (index == 2) {
        this.currenttime = "sell";
      }
    },
    // 点击返回顶部
    handelbacktop() {
      // 根据ref拿到scroll组件中data中的scroll对象并调用scrollTO方法 5秒之内回到顶部
      this.$refs.scrolls.scrollTos(0, 0, 5000);
    },
    // 获取当前的滚动的位置
    handelScroll(position) {
      // 当滚动位置大于1000时显示滚动按钮
      this.isShow = (-position.y )> 1000;
    //  决定tabcontrol组件是否吸顶
      this.isTabFixed= (-position.y)>this.tabControlOffsetTop
    },
    // 上拉加载更多
    loadMore() {
      this.getGoodsDate(this.currenttime);
      this.$refs.scrolls.finishPullUp()
    },
  },
  components: {
    NavBar,
    HomeRecommend,
    HomeSwiper,
    HomeFeature,
    TabControl,
    GoodList,
    BackTop,
    Scroll
  },
};
</script>
<style scoped>
#home {
  padding-top: 44px;
  position: relative;
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
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.fixed{
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
}
</style>
