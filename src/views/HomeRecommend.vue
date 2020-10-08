<template>
    <div class="recommend">
        <div v-for="(item,index) of recommends" :key="index" class="divitem">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
            <span>{{item.title}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
.recommend{
    display: flex;
    font-size: 12px;
    padding:8px  0 10px 0;
   border-bottom: 6px solid #eee;
}
.divitem{
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
}
.divitem img{
    width: 65px;
    height: 65px;
    margin-bottom: 5px;
}
</style>