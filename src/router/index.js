import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/components/Store'
import Home from '@/components/Home'
import Category from '@/components/Category'
import SubCategory from '@/components/SubCategory'
import Detail from '@/components/Detail'
import Brands from '@/components/Brands'
import About from '@/components/pages/About'
import Cart from '@/components/pages/Cart'
import Checkout from '@/components/pages/Checkout'
import Thankyou from '@/components/pages/Thankyou'

Vue.use(Router)

const User = {
  template: `
    <div class="user">
      <h2>User 123</h2>
      <router-view></router-view>
    </div>
  `
}

const User2 = {
  template: `
    <div class="user">
      <h2>Broadway Liquors Checkout</h2>
    </div>
  `
}

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    console.log("scrollBehavior 123")
    console.log(to.hash)
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/',
      name: 'Store',
      component: Store,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: '/about',
          name: 'About',
          component: About
        },
        {
          path: '/cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: '/thankyou',
          name: 'Thankyou',
          component: Thankyou
        },
        {
          path: '/:category',
          name: 'Category',
          component: Category
        },
        {
          path: '/:category/:subcategory',
          name: 'SubCategory',
          component: SubCategory
        },
        {
          path: '/:category/:subcategory/:brands',
          name: 'Makers',
          component: Brands
        },
        {
          path: '/:category/:subcategory/:maker/:bottlename',
          name: 'Detail',
          component: Detail
        }
      ]
    }
  ]
})
