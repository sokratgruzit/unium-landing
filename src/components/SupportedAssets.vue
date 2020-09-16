<template>
  <div class="container" data-aos="fade-up" id="assets" v-view="visibilityChanged">
    <div class="titleContainer pT-140">
      <h2 class="medium font-72">Supported <br>Assets</h2>
      <p>Unium currently supports all top blockchains and more than 500 tokens. To check the full list visit our assets page.</p>
      <picture>
        <source media="(max-width: 767px)" srcset="@/assets/img/assetsMob.png">
        <img src="@/assets/img/assetsDesk.png" alt="assetsDesk">
      </picture>
    </div>
  </div>
</template>

<script>
import mainMixin from '@/mixins/main'

export default {
  mixins: [mainMixin],
  methods: {
    visibilityChanged () {
      this.$store.commit('setMenuStatus', 2)
    }
  }
}
</script>
<style scoped>
  img{
    width: 100%;
    margin-top: 65px;
  }
  .titleContainer{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  h2{
    width: 50%;
    color: #fff;
  }
  p{
    width: 50%;
    font-size: 20px;
    line-height: 28px;
    color: rgba(255,255,255,.6);
  }
  picture{
    width: 100%;
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    p{
      font-size: 16px;
      line-height: 22px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    p{
      font-size: 16px;
      line-height: 22px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    h2{
      width: 100%;
    }
    p{
      width: 100%;
    }
  }
</style>
