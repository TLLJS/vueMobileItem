<template>
    <div class="tab-control">
        <div v-for="(item,index) of titles" :key="index" class="tab-control-item">
            <span @click="activeItem(index)" :class="{'active_item':currentItem==index}">{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            // 当前选中的索引
            currentItem:''
        }
    },
    methods:{
        activeItem(index){
            this.currentItem=index
            this.$emit('navigation',index)
        }
    },
}
</script>
<style scoped>
.tab-control{
    display: flex;
}
.tab-control-item{
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    
}
.tab-control-item span{
    padding: 5px;
}
span.active_item{
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-high-text);
}
</style>