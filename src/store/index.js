import Vue from 'vue'
import Vuex from 'vuex'
import items from '@/items.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeMenu: 0,
    navMenu: items.navigation,
    currencySlider: items.currencySlider,
    imgContainer: items.imgContainer,
    reviews: items.reviews,
    faq: items.faq
  },
  getters: {
  },
  mutations: {
    setMenuStatus (state, data) {
      state.activeMenu = data
    }
  },
  actions: {
  },
  modules: {
  }
})
