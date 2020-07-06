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
      title: '登陆注册'
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


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
