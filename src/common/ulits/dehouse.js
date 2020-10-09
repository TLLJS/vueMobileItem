//  防抖函数
 export function debounce(func,delay){
    let time=null
    return function () {
        if (time){
            clearTimeout(time)
        }
        time=setTimeout(()=>{
            func.call(this)
        },delay)
    }
}
//整合详情页中轮播图中间要显示的数据
export  class  Goods {
    constructor(itemInfo,column,services) {
        this.title=itemInfo.title
        this.desc=itemInfo.desc
        this.newPrice=itemInfo.price
        this.oldPrice=itemInfo.oldPrice
        this.discount=itemInfo.discountDesc
        this.columns=columns
        this.servies=servies
        this.realPrice=itemInfo.lowNowPrice
    }
}
//整合详情页中店铺的信息
export class Shop {
    constructor(shopInfo) {
        this.logo=shopInfo.shopLogo
        this.name=shopInfo.name
        this.fans=shopInfo.cFans
        this.sells=shopInfo.cSells
        this.score=shopInfo.score
        this.goodsCount=shopInfo.cGoods
    }
}
