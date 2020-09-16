<template>
  <div id="main" class="outer" data-aos="fade-in">
    <picture>
      <source media="(max-width: 767px)" srcset="@/assets/img/aboutBgMobile.jpg">
      <source media="(max-width: 1023px)" srcset="@/assets/img/aboutBgLaptop.jpg">
      <img src="@/assets/img/aboutBg.jpg" class="mainBg" alt="bg">
    </picture>
    <div class="container">
      <h1 class="bold">Discover Unium</h1>
      <p>Unium roadmap is a summary of Unium development, which has been organized into
        five eras. Each era is centered around a set of functionalities that will be delivered across multiple code releases. While the eras of Unium will be delivered sequentially, the work for each era happens in parallel, with research, prototyping and development often
        in progress all at once across the different development streams.</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$route.name)
    this.$store.commit('setMenuStatus', 5)
  }
}
</script>

<style scoped>
  .outer{
    position: relative;
    height: 680px;
  }
  .mainBg{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    object-fit: cover;
    z-index: 1;
  }
  .container{
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
  }
  h1{
    font-size: 96px;
    color: #fff;
    margin-top: 200px;
  }
  p{
    font-size: 24px;
    line-height: 34px;
    margin-top: 30px;
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    h1{
      font-size: 60px;
      line-height: 75px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    h1{
      font-size: 46px;
      line-height: 60px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .outer{
      height: 100vh;
    }
    h1{
      font-size: 38px;
      line-height: 45px;
    }
    p{
      font-size: 16px;
      line-height: 28px;
    }
  }
</style>
