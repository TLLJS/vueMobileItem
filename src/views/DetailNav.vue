<template>
    <NavBar>
        <div slot="left" class="back" @click="goBack">
            <img src="assets/images/tabbar/ic_emoji.png" alt="">
        </div>
        <div slot="center" class="title">
            <div :class="{activeItem:activeIndex}" @click="handelItem(index)" class="title_item" v-for="(item,index) of title" :key="index" v-text="item"></div>
        </div>
    </NavBar>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "DetailNav",
        data(){
            return {
                title:['商品','参数','推荐','评论'],
                //当前点击的title
                currentIndex:0,
            }
        },
        methods:{
            handelItem(index){
                this.currentIndex=index
            },
            goBack(){
                this.$router.back()
            }
        },
        computed:{
          activeIndex(){
              return this.currentIndex==index
          }
        },
        components:{
            NavBar
        }
    }
</script>

<style scoped>
.title{
    display: flex;
    font-size: 14px;
}
div.activeItem{
    color: var(--color-high-text);
}
.title_item{
    flex: 1;
}
.back img{
        margin-top: 10px;
    }
</style>