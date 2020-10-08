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
        this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position)

        })
        // 监听上拉事件
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
        })
    },
    methods:{
        scrollTos(x,y,time=300){
            this.scroll.scrollTo(x,y,time)
        },
        // 启用多次上拉加载
        finishPullUp(){
            this.scroll.finishPullUp()
        }
    }
}
</script>
<style scoped>

</style>