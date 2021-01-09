<template>
  <div class="sliderContainer" :class="firstAnimation ? 'animHead' : ''">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      v-if="cryptoData"
    >
      <swiper-slide
        v-for="slide in cryptoData"
        :key="slide.id"
      >
        <div class="item">
          <div class="inner">
            <img :src="slide.logo_url" alt="">
            <div class="descr">
              <div class="top">
                <p class="medium">{{slide.name}}</p>
                <p class="medium">${{parseFloat(slide.price).toFixed(2)}}</p>
              </div>
              <div class="bottom">
                <p class="medium">{{slide.currency}}</p>
                <p class="medium">{{parseFloat(slide.high).toFixed(2)}}</p>
              </div>
            </div>
          </div>
          <div class="chart"></div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CurrencySlider',
  data () {
    return {
      firstAnimation: false,
      swiperOptions: {
        speed: 700,
        slidesPerView: 'auto',
        loop: true,
        freeMode: true,
        autoplay: {
          delay: 2000
        }
      },
      cryptoData: false
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    setTimeout(() => {
      this.firstAnimation = true
    }, 1000)
    axios
      .get('https://api.nomics.com/v1/currencies/ticker?key=fb1a5f1e05127cfca111dcebba2ef81a&ids=BTC,ETH,XRP&interval=1d&convert=USD', {
        headers: {
        }
      })
      .then(response => (this.cryptoData = response.data))
  }
}
</script>
<style scoped>
  .swiper-slide{
    width: 305px;
    padding-right: 20px;
  }
  .item{
    display: flex;
    border-radius: 8px;
    border: 2px solid rgba(255,255,255,.1);
  }
  .item .chart{
    width: 70px;
  }
  .item .inner{
    width: calc(100% - 70px);
    display: flex;
    align-items: center;
    padding: 15px;
  }
  .swiper-container{
    padding-left: 20px;
  }
  .descr{
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
  .descr > div{
    display: flex;
    justify-content: space-between;
  }
  .inner img{
    margin-right: 10px;
    height: 40px;
  }
  .descr .top p{
    color: #fff;
    font-size: 14px;
  }
  .descr .top{
    margin-top: 5px;
  }
  .descr .bottom p{
    font-size: 10px;
    color: rgba(255,255,255,.6);
  }
  .sliderContainer{
    position: absolute;
    left: 0px;
    bottom: 10px;
    width: 100%;
    z-index: 5;
    transform: translateX(20px);
    transition: .4s ease-in-out;
    opacity: 0;
  }
  .animHead .sliderContainer{
    transform: translateX(0px);
    opacity: 1;
  }
</style>
