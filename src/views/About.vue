<template>
  <div>
    <AboutDiscover/>
    <AboutContent/>
    <AboutCounter/>
    <Reviews :itemData="$store.state.reviews"/>
    <GetStarted/>
  </div>
</template>

<script>
import AboutDiscover from '@/components/AboutDiscover.vue'
import AboutContent from '@/components/AboutContent.vue'
import AboutCounter from '@/components/AboutCounter.vue'
import Reviews from '@/components/Reviews.vue'
import GetStarted from '@/components/GetStarted.vue'

export default {
  name: 'About',
  components: {
    AboutDiscover,
    AboutContent,
    AboutCounter,
    Reviews,
    GetStarted
  }
}
</script>
