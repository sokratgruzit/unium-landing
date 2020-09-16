<template>
  <div>
    <MainContainer/>
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

export default {
  name: 'Home',
  components: {
    MainContainer,
    AboutMain,
    ImgContent,
    Counter,
    SupportedAssets,
    Reviews,
    Faq,
    GetStarted
  }
}
</script>
