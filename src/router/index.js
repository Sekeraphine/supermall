import {
  createRouter,
  createWebHistory
} from 'vue-router'
const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')



// const Home = ()=> import()

//1.安装插件


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',component: Home},
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),

})


export default router

