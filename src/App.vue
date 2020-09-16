<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/modules/Header'
import Footer from './components/modules/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
