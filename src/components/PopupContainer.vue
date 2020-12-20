<template>
  <div class="popup-container">
    <div class="popup-container__background" @click="closePopup"></div>
    <div class="popup-container__outer">
      <div class="closePopup" @click="closePopup">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M46 2L2 46" stroke="white" stroke-width="4"/>
          <path d="M2 2L46 46" stroke="white" stroke-width="4"/>
        </svg>
      </div>
      <div class="popup-container__inner" v-html="itemData">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    'itemData',
    'openPopup'
  ],
  methods: {
    closePopup () {
      this.$store.commit('setPrivacyPopup', false)
    }
  }
}
</script>
<style>
  .closePopup{
    position: absolute;
    top: 10px;
    right: -80px;
    cursor: pointer;
  }
  .closePopup path{
    transition: .6s ease-in-out;
  }
  .closePopup:hover path{
    stroke: #397EF4;
  }
  .popup-container__inner{
    max-height: 100%;
    width: 100%;
    overflow: auto;
    padding-right: 100px;
  }
  /* width */
  .popup-container__inner::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #fff;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #397EF4;
    border-radius: 35px;
  }
  .popup-container__outer *{
    color: #020B1D;
  }
  .popup-container__outer p{
    font-size: 20px;
    line-height: 28px;
  }
  .popup-container__outer li:after{
    position: absolute;
    height: 8px;
    width: 8px;
    background: #397EF4;
    border-radius: 50%;
    left: 0px;
    top: 10px;
    content: '';
  }
  .popup-container__outer li{
    font-size: 20px;
    line-height: 28px;
    position: relative;
    padding-left: 15px;
  }
  .popup-container__outer h5{
    font-size: 24px;
    line-height: 34px;
    font-family: "Ubuntu-Medium", "NotoSans-Medium";
  }
  .popup-container__outer h3{
    font-size: 42px;
    font-family: "Ubuntu-Medium", "NotoSans-Medium";
  }
  .popup-container__outer h4{
    font-size: 24px;
    line-height: 34px;
    opacity: .6;
  }
  .popup-container__outer h2{
    font-size: 72px;
    line-height: 80px;
    font-family: "Ubuntu-Medium", "NotoSans-Medium";
  }
  .popup-container__outer{
    position: absolute;
    top: 135px;
    left: 135px;
    height: calc(100% - 270px);
    width: calc(100% - 270px);
    z-index: 2;
    background: #E8EBEF;
    padding: 65px;
    border-radius: 10px;
  }
  .popup-container__background{
    background: rgba(2,11,29,.64);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .popup-container{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 9999;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .popup-container__outer {
      left: 50px;
      top: 50px;
      height: calc(100% - 100px);
      width: calc(100% - 100px);
      padding: 35px;
    }
    .closePopup {
      position: absolute;
      top: 0px;
      right: -50px;
      transform: scale(.7);
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .popup-container__outer p {
      font-size: 16px;
      line-height: 20px;
    }
    .popup-container__outer h3 {
      font-size: 30px;
      font-family: "Ubuntu-Medium", "NotoSans-Medium";
    }
    .popup-container__outer h4 {
      font-size: 18px;
      line-height: 28px;
    }
    .popup-container__outer h2{
      font-size: 42px;
      line-height: 50px;
    }
    .popup-container__outer{
      height: 100%;
      width: 100%;
      left: 0px;
      top: 0px;
      padding: 26px;
      padding-top: 60px;
    }
    .closePopup path{
      stroke: #007aff;
    }
    .closePopup{
      right: 5px;
    }
    .popup-container__inner{
      padding-right: 10px;
    }
  }
</style>
