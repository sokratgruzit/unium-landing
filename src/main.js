import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/main.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import checkView from 'vue-check-view'
import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(checkView)

AOS.init()

Vue.use(VueAwesomeSwiper)
Swiper.use([Navigation, Pagination])
Vue.config.productionTip = false

Vue.use(VueSmoothScroll, {
  duration: 400,
  updateHistory: false
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
