import Vue from 'vue'
import VueRouter from 'vue-router'

const login = () => import("../views/login.vue")
const main = () => import("../views/Main.vue")
const list = () => import('../components/list/list')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/main',
    component: main,
    children: [
      {
        path: 'list',
        component: list
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//使用push的方法
const RouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return RouterPush.call(this, to).catch(err => err)
}

//使用replace的方法
const RouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return RouterReplace.call(this, to).catch(err => err)
}


export default router
