<template>
  <div class="container">
    <div class="counterInner">
      <div class="counter" data-aos="fade-up">
        <div class="num medium">2018</div>
        <h3 class="medium">Founding year</h3>
        <p>By group of Computer Science Experts and Academics</p>
      </div>
      <div class="counter" data-aos="fade-up">
        <div class="num medium">200+</div>
        <h3 class="medium">Product updates</h3>
        <p>New releases across desktop,
          mobile and hardware</p>
      </div>
      <div class="counter" data-aos="fade-up">
        <div class="num medium">300+</div>
        <h3 class="medium">Digital assets</h3>
        <p>Supported cryptocurrencies
          & tokens
          in Unium products</p>
      </div>
      <div class="counter" data-aos="fade-up">
        <div class="num medium">3</div>
        <h3 class="medium">New release every 3 weeks</h3>
        <p>Released software every three
          weeks since 2019</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
}
</script>
<style scoped>
  .counterInner{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding-top: 75px;
  }
  .counter{
    display: flex;
    width: 50%;
    flex-direction: column;
    margin-top: 65px;
  }
  .num{
    font-size: 144px;
    -webkit-text-stroke: 2px #397EF4;
    color: transparent;
  }
  h3{
    font-size: 20px;
    color: #fff;
    margin-top: 15px;
    margin-bottom: 10px;
  }
  p{
    font-size: 18px;
    line-height: 24px;
    color: rgba(255,255,255,.6);
    padding-right: 30px;
  }
  /*Laptop 1024*/
  @media (max-width: 1900px){
    .counter{
      width: 25%;
    }
    .num{
      font-size: 100px;
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    .counter{
      width: 50%;
    }
    .counter{
      margin-top: 35px;
    }
    .num{
      font-size: 90px;
    }
    p{
      font-size: 16px;
      line-height: 22px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .counterInner{
      flex-direction: column;
    }
    .counter{
      width: 100%;
    }
  }
</style>
