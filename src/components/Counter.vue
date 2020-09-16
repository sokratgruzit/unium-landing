<template>
  <div class="container">
    <div class="counterInner">
      <div class="counter" data-aos="fade-up">
        <div class="num medium">2000</div>
        <h3 class="medium">Coins & Tokens</h3>
        <p>Unium is the only mobile non-custodial wallet that supports
          the Bitcoin, Bitcoin Cash, Ethereum, Dash, EOS and Binance blockchains, as well as all the tokens which exist on those blockchains.</p>
      </div>
      <div class="counter" data-aos="fade-up">
        <div class="num medium">750</div>
        <h3 class="medium">Dedicated Servers & Nodes</h3>
        <p>Unium integrated full nodes of all the blockchains that supports,
          so you have access to these blockchains discretely and seamlessly.</p>
      </div>
      <div class="counter" data-aos="fade-up">
        <div class="num medium">24</div>
        <h3 class="medium">Decentralized Exchange</h3>
        <p>Unium provides the rates and exchange services from top exchanges, you can be rest assured that you will always get the best rates possible.</p>
      </div>
      <div class="counter" data-aos="fade-up">
        <div class="num medium">986</div>
        <h3 class="medium">Superior cloud technology</h3>
        <p>Unium uses latest cloud technologies for your precious data back-up and storage, Your data is always safe.</p>
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
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
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
