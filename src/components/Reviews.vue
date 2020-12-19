<template>
  <div class="container" data-aos="fade-up"  id="reviews" v-view="visibilityChanged">
    <div class="reviewsContainer pT-140">
      <div class="ttlContainer">
        <h3 class="medium font-72">Reviews</h3>
        <div class="navigationContainer">
          <div class="navPrev">

            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 13L2 7L8 1" stroke="#E8EBEF" stroke-width="2"/>
            </svg>
          </div>
          <div class="navNext">
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13L7 7L0.999999 1" stroke="white" stroke-width="2"/>
            </svg>
          </div>
        </div>
      </div>
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
      >
        <swiper-slide
          v-for="slide in itemData"
          :key="slide.id"
        >
          <div class="review">
            <i>
              <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7779 1.44134V6.78112C13.7779 7.50532 13.1909 8.0921 12.4667 8.0921C9.88286 8.0921 8.47737 10.7422 8.28257 15.9726H12.4667C13.1909 15.9726 13.7779 16.5599 13.7779 17.2839V28.5585C13.7779 29.2824 13.1909 29.8692 12.4667 29.8692H1.31097C0.586505 29.8692 0 29.2819 0 28.5585V17.2839C0 14.7765 0.252459 12.4756 0.750136 10.4443C1.26055 8.36142 2.04406 6.54031 3.07819 5.03133C4.14229 3.48054 5.47334 2.26362 7.03467 1.41586C8.60653 0.562962 10.4344 0.130371 12.4671 0.130371C13.1909 0.130371 13.7779 0.717151 13.7779 1.44134ZM30.6887 8.09219C31.4125 8.09219 32 7.50486 32 6.78122V1.44144C32 0.717243 31.4126 0.130463 30.6887 0.130463C28.6568 0.130463 26.8286 0.563145 25.2573 1.41595C23.6957 2.26372 22.3639 3.48064 21.2996 5.03142C20.2659 6.5404 19.4824 8.36161 18.9719 10.4449C18.4744 12.4769 18.222 14.7778 18.222 17.2839V28.5586C18.222 29.2825 18.8092 29.8693 19.5332 29.8693H30.6886C31.4124 29.8693 31.9994 29.282 31.9994 28.5586V17.2839C31.9994 16.56 31.4125 15.9726 30.6886 15.9726H26.5641C26.756 10.7423 28.141 8.09219 30.6887 8.09219Z" fill="#397EF4"/>
              </svg>
            </i>
            <p>{{slide.text}}</p>
            <div class="name">{{slide.name}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    itemData: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      swiperOptions: {
        speed: 700,
        slidesPerView: 'auto',
        freeMode: true,
        autoplay: {
          delay: 2000
        },
        navigation: {
          nextEl: '.navNext',
          prevEl: '.navPrev'
        }
      }
    }
  },
  methods: {
    visibilityChanged () {
      if (this.$route.name !== 'About') {
        this.$store.commit('setMenuStatus', 3)
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  }
}
</script>
<style scoped>
  .name{
    font-size: 13px;
    text-transform: uppercase;
  }
  p{
    color: #fff;
    font-size: 20px;
    line-height: 28px;
  }
  .swiper-container{
    overflow: visible;
    margin-top: 80px;
  }
  .review{
    width: 100%;
    background: #0F1829;
    border-radius: 8px;
    height: 375px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    padding-top: 50px;
  }
  .review i{
    position: absolute;
    left: 30px;
    top: -16px;
  }
  .swiper-slide{
    width: 400px;
    padding-right: 30px;
  }
  .reviewsContainer{
    width: 100%;
  }
  .ttlContainer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  h3{
    color: #fff;
  }
  .navigationContainer{
    display: flex;
  }
  .navigationContainer div{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    width: 56px;
    background: #397EF4;
    border: 2px solid #397EF4;
    border-radius: 50%;
    cursor: pointer;
    transition: .4s ease-in-out;
    margin-left: 15px;
  }
  .navigationContainer div.swiper-button-disabled{
    background: transparent;
    border-color: #0F244D;
  }
  .navigationContainer div:hover:not(.swiper-button-disabled){
    background: #5594FF;
    border-color: #5594FF;
  }
  .navigationContainer div:active{
    background: #3271DC;
    border-color: #3271DC;
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    p{
      font-size: 16px;
      line-height: 22px;
    }
    .review{
      height: 275px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .swiper-container{
      margin-top: 40px;
    }
    .swiper-slide{
      width: 275px;
      padding-right: 15px;
    }
    .review{
      padding: 15px;
      padding-top: 30px;
    }
    .review i{
      left: 15px;
    }
    .navigationContainer{
      display: none;
    }
  }
</style>
