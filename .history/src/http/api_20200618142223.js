//用来封装所有的请求
import service from './index'

export default {
  //1.获取首页数据（get）
  getRecommend() {
    return service.get('/recommend')
  },
  //2.搜索（get）
  getSearch(value) {
    return service.get(`/search?value=${value}`)
  },
  //3.分类查询(get)
  getClassification(id) {
    return service.get(`/classification?mallSubId=${id}`)
  },
  //4.查询获取购物车数据(get)
  getShoppingCard() {
    return service.get('/getCard')
  },
  //5.购物车加减商品(post)
  getEditCart({count, id, mallPrice}) {
    return service.post('/editCart', {
      count, id, mallPrice
    })
  },
  //6.购物车商品删除(post)
  getDeleteShop({id}){
    return service.post('/deleteShop', {
      id
    })
  },
  //7:购物车支付页面(post)
  getOrder({address,tel,orderId,totalPrice,idDirect,count}){
    return service.post('/order', {
      address,tel,orderId,totalPrice,idDirect,count
    })
  },
  //8:单个商品详情(get)
  getGoodsDetails(id) {
    return service.get(`/goods/one?id=${id}`)
  },
  //9:收藏单个商品(post)
  getCollection({goods}){
    return service.post('/collection', {
      goods
    })
  },
  //10:取消收藏(post)
  getCancelCollection({id}){
    return service.post('/cancelCollection', {
     id
    })
  },
  //11:查询商品是否已收藏(post)
  getIsCollection({id}){
    return service.post('/isCollection', {
      id
    })
  },
  //12:加入购物车(post)
  getAddShop({id}){
    return service.post('/addShop', {
      id
    })
  },
  //13:退出登录(post)
  getLoginOut(){
    return service.post('/loginOut')
  },
  //14:获取用户信息(post)
  getQueryUser(){
    return service.post('/queryUser')
  },
  //15:
  //16:
  //17:
}