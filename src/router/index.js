import Vue from 'vue'
import Router from 'vue-router'
//导入对应的路由组件
import HomeContainer from '@/components/tabbar/HomeContainer'
import ShopContainer from '@/components/tabbar/ShopContainer'
import OrderContainer from '@/components/tabbar/OrderContainer'

Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'HomeContainer', 
      component: HomeContainer
    },
    {
      path: '/shopcar',
      name: 'ShopContainer',
      component: ShopContainer
    },
    {
      path: '/order',
      name: 'OrderContainer',
      component: OrderContainer
    }
  ],
  linkActiveClass:'mui-active'//覆盖默认的路由高亮的类,默认的类叫router-link-active
})
