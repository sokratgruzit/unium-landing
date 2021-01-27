<template>
  <div class="sliderContainer" :class="firstAnimation ? 'animHead' : ''" data-aos="fade-up">
    <div class="nav">
      <div class="prev" ref="prev"></div>
      <div class="next" ref="next"></div>
    </div>
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      v-if="cryptoData"
    >
      <template v-for="(slide, index) in cryptoData">
        <swiper-slide :key="slide.id" v-if="index <= 20"
        >
          <div class="item">
            <div class="inner">
              <img :src="slide.image" alt="">
              <div class="descr">
                <div class="top">
                  <p class="medium">{{slide.name}}</p>
                  <p class="medium">${{parseFloat(slide.current_price).toFixed(2)}}</p>
                </div>
                <div class="bottom">
                  <p class="medium">{{slide.symbol}}</p>
                  <p class="medium" :class="Number(slide.price_change_24h) < 0 ? 'red' : 'green'">{{parseFloat(slide.price_change_24h).toFixed(2)}}</p>
                </div>
              </div>
            </div>
            <div class="chart"></div>
          </div>
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'CurrencySlider',
  data () {
    return {
      firstAnimation: false,
      swiperOptions: {
        speed: 2000,
        slidesPerView: 'auto',
        loop: true,
        freeMode: true,
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
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
  methods: {
    autoplay () {
      setInterval(() => {
        this.$refs.next.click()
      }, 2000)
    }
  },
  mounted () {
    this.autoplay()
    setTimeout(() => {
      this.firstAnimation = true
    }, 1000)
    const url = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false']
    const request = url.map(u => fetch(u))
    Promise.all(request)
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(response => (this.cryptoData = response[0]))
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
    display: none;
  }
  .item .inner{
    width: 100%;
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
    text-transform: uppercase;
  }
  .descr .bottom p.green{
    color: #89C988;
  }
  .descr .bottom p.red{
    color: #89C988;
  }
  .sliderContainer{
    position: relative;
    width: 100%;
    z-index: 5;
    transition: .4s ease-in-out;
    padding-top: 60px;
  }
</style>
