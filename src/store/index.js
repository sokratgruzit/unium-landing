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
    faq: items.faq,
    privacy: items.privacy,
    activePrivacy: false,
    video: false
  },
  getters: {
  },
  mutations: {
    setVideo (state, data) {
      state.video = data
    },
    setMenuStatus (state, data) {
      state.activeMenu = data
    },
    setPrivacyPopup (state, status) {
      state.activePrivacy = status
    }
  },
  actions: {
  },
  modules: {
  }
})
