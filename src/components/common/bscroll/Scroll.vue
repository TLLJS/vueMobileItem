<template>
    <div class="wrapper" ref="scrolls">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullingLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            scroll:null
        }
    },
    mounted(){
        // 创建Bscroll对象
        this.scroll=new Bscroll(this.$refs.scrolls,{
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullingLoad
        })
        // 监听滚动的位置
        //判断是否需要滚动
        if (this.probeType===2||this.probeType===3){
            this.scroll.on('scroll',(position)=>{
                this.$emit('scroll',position)

            })
        }
        // 监听上拉事件
        //判断是否需要监听上拉加载更多
        if (this.pullingLoad){
            this.scroll.on('pullingUp',()=>{
                this.$emit('pullingUp')
            })
        }
    },
    methods:{
        scrollTos(x,y,time=300){
            this.scroll.scrollTo(x,y,time)
        },
        // 启用多次上拉加载
        finishPullUp(){
            this.scroll.finishPullUp()
        },
        //图片刷新
        refresh(){
            this.scroll&& this.scroll.refresh()
        }
    }
}
</script>
<style scoped>

</style>