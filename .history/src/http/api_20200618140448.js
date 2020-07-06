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
    return service.get(`/classification?id=${id}`)
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
  //8:
  //9:
  //10:
  //11:
  //12:
  //13:
  //14:
  //15:
  //16:
  //17:
}