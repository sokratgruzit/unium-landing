<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/modules/Header'

export default {
  components: {
    Header
  }
}
</script>
