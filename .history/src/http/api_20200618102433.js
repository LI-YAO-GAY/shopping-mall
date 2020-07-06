//用来封装所有的请求
import service from './index'

export default {
  //获取首页数据
getRecommend(){
  return service.get('/recommend')
}
}