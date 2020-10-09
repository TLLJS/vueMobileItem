<template>
        <swiper class="detail-swiper">
            <swiper-item v-for="(item,nidex) in topImage" :key="nidex">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
</template>

<script>
    import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
    export default {
        components: {
            Swiper,
            SwiperItem
        },
        props:{
            topImage:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        name: "DetailSwiper"
    }
</script>

<style scoped>
.detail-swiper{
    height: 400px;
    overflow: hidden;
}
</style>