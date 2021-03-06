import Vue from 'vue'
import VueRouter from 'vue-router'
const Home=()=>import ('views/Home.vue')
const Cate=()=>import('views/Cate.vue')
const Categry=()=>import('views/Categry.vue')
const Prifile=()=>import('views/Profile.vue')
const Detail=()=>import('views/Detail.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/cart',
    component:Cate
  },
  {
    path:'/categry',
    component:Categry
  },
  {
    path:'/profile',
    component:Prifile
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
