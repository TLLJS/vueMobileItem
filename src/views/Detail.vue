<template>
    <div id="detail">
<!--顶部导航栏组件-->
        <deatail-nav-bar class="detail-nav"></deatail-nav-bar>
        <Scroll class="content">
            <!--轮播图组件-->
            <detail-swiper :topImage="topImage"></detail-swiper>
            <!-- 中间详情组件 -->
            <DetailBaseInfo :goods="goods"></DetailBaseInfo>
        </Scroll>
    </div>
</template>

<script>
    import {Goods} from 'common/ulits/dehouse'

    import Scroll from "components/common/bscroll/Scroll";

    import DeatailNavBar from 'views/DetailNav'
    import DetailSwiper from "views/DetailSwiper";
    import DetailBaseInfo from "views/DetailBaseInfo";
    export default {
        name: "Detail",
        data(){
            return {
                //传递过来的商品ID
                lid:'',
            // 顶部轮播图数据
                topImage:[],
            //    中间详情信息的数据
                goods:{}
            }
        },
        created() {
            this.lid= this.$route.params.iid
        },
        methods:{
            //发送请求获取详情数据
            async getDetailDate(){
                const url='/detail'
                const iid=this.lid
                const res=await this.axios.get(url,{
                    params:{iid}
                })
                //获取顶部轮播图数据
                this.topImage=res.result.itemInfo.topImages
                //获取商品详情信息
                this.goods=new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
            }
        },
        components:{
            DetailSwiper,
            DeatailNavBar,
            DetailBaseInfo,
            Scroll
        }

    }
</script>

<style scoped>
#detail{
    position: relative;
    z-index: 99;
    background-color: #fff;
    height: 100vh;
}
    .content{
        height: calc(100% - 44px);
    }
    .detail-nav{
        position: relative;
        z-index: 99;
    }
</style>