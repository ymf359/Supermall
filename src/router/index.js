import {createRouter, createWebHistory} from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Shopcar = () => import('views/shopcar/Shopcar')
const Profile = () => import('views/profile/Profile')

// 1.安装插件

const routerHistory = createWebHistory()

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcar',
    component: Shopcar
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: 'history'
})


export default router