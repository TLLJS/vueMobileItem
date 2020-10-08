<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img
        slot="item-img"
        src="@/assets/images/tabbar/ic_contacts_normal.png"
        alt=""
      />
      <img
        slot="item-img-active"
        src="@/assets/images/tabbar/ic_contacts_selected.png"
        alt=""
      />
      <span slot="item-text">首页</span>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="blue">
      <img slot="item-img" src="@/assets/images/tabbar/ic_gallery.png" alt="" />
      <img
        slot="item-img-active"
        src="@/assets/images/tabbar/ic_game.png"
        alt=""
      />
      <span slot="item-text">购物车</span>
    </tab-bar-item>
    <tab-bar-item path="/categry" activeColor="blue">
      <img
        slot="item-img"
        src="@/assets/images/tabbar/ic_find_normal.png"
        alt=""
      />
      <img
        slot="item-img-active"
        src="@/assets/images/tabbar/ic_find_selected.png"
        alt=""
      />
      <span slot="item-text">分类中心</span>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="blue">
      <img slot="item-img" src="@/assets/images/tabbar/ic_emoji.png" alt="" />
      <img
        slot="item-img-active"
        src="@/assets/images/tabbar/ic_friends_circle.png"
        alt=""
      />
      <span slot="item-text">个人中心</span>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from "components/common/tabbar/Tabbar";
import TabBarItem from "components/common/tabbar/tabbarItem";
export default {
  components: {
    "tab-bar": TabBar,
    "tab-bar-item": TabBarItem,
  },
};
</script>
<style scoped>
</style>