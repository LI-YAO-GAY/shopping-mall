import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Layout from '../views/layout/Layout'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path: 'category',
        name: 'category',
        component: () => import('../views/category/Category'),
        meta: {
          title: '分类'
        }
      },
      {
        path: 'shoppingCarts',
        name: 'ShoppingCarts',
        component: () => import('../views/shoppingCarts/ShoppingCarts'),
        meta: {
          title: '购物车'
        }
      },
      {
        path: 'mine',
        name: 'Mine',
        component: () => import('../views/mine/Mine'),
        meta: {
          title: '我的'
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue'),
    meta: {
      title: '登陆注册'
    }
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import('../views/details/Details'),
    meta: {
      title: '详情页'
    }
  },
  {
    path: '/minePersonalData',
    name: 'MinePersonalData',
    component: () => import('../views/minePersonalData/MinePersonalData'),
    meta: {
      title: '个人资料'
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/mine/order/Order'),
    meta: {
      title: '全部订单'
    }
  },
  {
    path: '/collect',
    name: 'Collect',
    component: () => import('../views/mine/collect/Collect.vue'),
    meta: {
      title: '收藏'
    }
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import('../views/mine/address/Address.vue'),
    meta: {
      title: '地址管理'
    }
  },
  {
    path: '/EditAddressPage',
    name: 'EditAddressPage',
    component: () => import('../views/mine/address/EditAddressPage.vue'),
    meta: {
      title: '编辑地址'
    }
  },

  {
    path: '/newAddress',
    name: 'NewAddress',
    component: () => import('../views/mine/address/NewAddress.vue'),
    meta: {
      title: '新增地址'
    }
  },
  {
    path: '/browse',
    name: 'Browse',
    component: () => import('../views/mine/browse/Browse.vue'),
    meta: {
      title: '最近浏览'
    }
  },
  {
    path: '/evaluate',
    name: 'Evaluate',
    component: () => import('../views/mine/evaluate/Evaluate.vue'),
    meta: {
      title: '评价'
    }
  },
  {
    path: '/completed',
    name: 'Completed',
    component: () => import('../views/mine/completed/Completed'),
    meta: {
      title: '已完成'
    }
  },
  {
    path: '/shoppingPayment',
    name: 'ShoppingPayment',
    component: () => import('../views/shoppingPayment/ShoppingPayment.vue'),
    meta: {
      title: '订单结算'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

// //路由守卫
// let whitePath = ['/login','/mine','/','/details']
// router.beforeEach((to,from,next)=>{
// document.title = to.meta.title
// next()
// let user = sessionStorage.getItem('user')
// if (whitePath.includes(to.path)){
//   next()
// }else{
//   user ? next() : ('/login')
// }
// })

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
