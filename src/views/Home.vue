<template>
  <div>
    <MainContainer/>
    <Video/>
    <CurrencySlider/>
    <AboutMain/>
    <ImgContent
      v-for="data in $store.state.imgContainer"
      :key="data.id"
      :itemData="data"
    />
    <Counter/>
    <SupportedAssets/>
    <Reviews :itemData="$store.state.reviews"/>
    <Faq :itemData="$store.state.faq"/>
    <GetStarted/>
    <Footer/>
  </div>
</template>

<script>
import MainContainer from '@/components/MainContainer.vue'
import AboutMain from '@/components/AboutMain.vue'
import ImgContent from '@/components/ImgContent.vue'
import Counter from '@/components/Counter.vue'
import SupportedAssets from '@/components/SupportedAssets.vue'
import Reviews from '@/components/Reviews.vue'
import Faq from '@/components/Faq.vue'
import GetStarted from '@/components/GetStarted.vue'
import Footer from '@/components/modules/Footer'
import Video from '@/components/Video'
import CurrencySlider from '@/components/CurrencySlider'

export default {
  name: 'Home',
  components: {
    Footer,
    MainContainer,
    AboutMain,
    ImgContent,
    Counter,
    SupportedAssets,
    Reviews,
    Faq,
    GetStarted,
    Video,
    CurrencySlider
  }
}
</script>
