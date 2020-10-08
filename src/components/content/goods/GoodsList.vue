<template>
    <div class="goods">
        <goods-list-item v-for="(item,index) in goods" :key="index" :goods_item='item'></goods-list-item>
    </div>
</template>
<script>
import GoodsListItem from 'components/content/goods/GoodsListItem'
export default {
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{}
    },
    components:{
        GoodsListItem
    }
}
</script>
<style scoped>

</style>