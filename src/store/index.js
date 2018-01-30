import Vue from 'vue'
import Vuex from 'vuex'
import categories from './categories'
import bottles from './bottles'
import shoppingCart from './shoppingcart'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    allBottles: state => state.bottles,
    allCategories: state => state.categories,
    getBottlesByCategory: (state) => {
      return category => state.bottles.filter(bottle => {
        return bottle.bottleCategory === category
      })
    },
    getBottlesBySubCategory: (state) => {
      return subCategory => state.bottles.filter(bottle => {
        return bottle.bottleSubCategory === subCategory
      })
    },
    getShoppingCartCount: (state) => state.shoppingCart.length,
    getRandomBottles: (state) => state.bottles,
    getShoppingCart: (state) => state.shoppingCart,
    // getBottlesByBrand: (state) => (brand) => {
    //   return state.todos.find(todo => todo.id === id)
    // },
  },
  mutations: {
    incrementShoppingCart (state) {
      console.log('123')
      state.shoppingCartCount++
    }
  },
  state: {
    shoppingCart: shoppingCart,
    categories: categories,
    currentBottle: [
      {
        bottleID: 12345678,
        bottleTitle: 'Hangar 1',
        bottleSubTitle: 'Straight Vodka',
        bottleFullTitle: 'Hangar 1 Straight Vodka',
        bottlePrice: '19.99',
        bottleCategory: 'spirits',
        bottleSubCategory: 'vodka',
        bottleMaker: 'Hangar 1',
        bottleShortMaker: 'hangar1',
        bottleShortName: 'hangar1-straightvodka',
        bottleImg: '/static/bottles/bottle_8.png',
        bottleImgMedRes: '/static/bottles/med-res/bottle_6.png'
      },
    ],
    bottles: bottles
  }
})
