<template>
  <div @click="itemClick">
    <img :src="goods_item.show.img" alt=""  @load="imageLoad"/>
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
  methods:{
    imageLoad(){
      this.$bus.$emit('itemImageLoad')
    },
    itemClick(){
      this.$router.push('/detail'+this.goods_item.iid)
    }
  }
};
</script>
<style scoped>
</style>