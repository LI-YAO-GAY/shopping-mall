//用来封装所有的请求
import service from './index'

export default {
//获取首页数据（get）
getRecommend(){
  return service.get('/recommend')
},
//搜索（get）
getSearch(value){
  return service.get('/search')
},
//分类查询(get)
getClassification(id){
  return service.get('/classification?mallSubId=${id}')
},
//查询获取购物车数据(get)
getShoppingCard(){
  return service.get('/getCard')
}
}