//用来封装所有的请求
import service from './index'

export default {
//获取首页数据
recommend(){
  return service.get('/recommend')
}
}