<template>
  <div>
    <img :src="goods_item.show.img" alt="" />
    <div>
      <p>{{ goods_item.title }}</p>
      <span class="price">{{goods_item.price}}</span>
      <span class="collect">{{goods_item.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goods_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
</style>