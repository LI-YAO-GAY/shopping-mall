//用来封装所有的请求
import service from './index'

export default {
//1.获取首页数据（get）
getRecommend(){
  return service.get('/recommend')
},
//2.搜索（get）
getSearch(value){
  return service.get(`/search?value=${value}`)
},
//3.分类查询(get)
getCattagory(id){
  return service.get(`/classification?id=${id}`)
},
//4.查询获取购物车数据(get)
getShoppingCard(){
  return service.get('/getCard')
},
//5.购物车加减商品(post)
getEditCart(){
  return service.post('/editCart',{
count,id,mallPrice
  })
}
}