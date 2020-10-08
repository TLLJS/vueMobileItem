<template>
  <div class="tab-bar-item" v-on:click="clickNavigaton">
    <!-- 因为插槽会被替换，所以不应该在插槽上面设置样式和属性 -->
    <div v-if="!isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
    };
  },
  computed: {
    isActive() {
      // this.$route.path当前活跃的path,this.path外界传过来的path
      return this.$route.path.includes(this.path);
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
      }
  },
  methods: {
    clickNavigaton() {
      // catch(()=>{})防止连续点击同一个路由地址报错
      this.$router.push(this.path).catch(() => {});
    },
  },
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>