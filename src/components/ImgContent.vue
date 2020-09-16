<template>
  <div class="container" :class="itemData.imgPos" data-aos="fade-up">
      <div class="imgContent pT-140">
        <div class="imgContainer">
          <img :src="require(`@/assets/img/${itemData.img}`)" :alt="itemData.title">
        </div>
        <div class="descr">
          <h2 class="medium font-72" v-html="itemData.title"></h2>
          <p>{{itemData.text}}</p>
          <div class="btnContainer">
            <a :href="itemData.url" class="btn medium"><span>{{itemData.btn}}</span></a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  props: {
    itemData: {
      type: Object,
      require: true
    }
  }
}
</script>
<style scoped>
  .imgContent{
    display: flex;
    width: 100%;
  }
  .imgContainer img{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .imgContainer{
    position: relative;
    width: 50%;
    padding-top: 48%;
  }
  .descr{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
  }
  p{
    font-size: 20px;
    line-height: 28px;
    color: rgba(255,255,255,.6);
    text-align: center;
  }
  h2{
    color: #fff;
    margin-bottom: 30px;
    text-align: center;
  }
  .btn{
    transition: .4s ease-in-out;
    height: 48px;
    display: flex;
    align-items: center;
    color: #fff;
    text-transform: uppercase;
    padding: 0px 30px;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
    margin-right: auto;
    margin-left: auto;
  }
  .btn span{
    position: relative;
    z-index: 3;
    color: #fff;
  }
  .btn::before{
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    z-index: 0;
    background: rgb(57,126,244);
    background: linear-gradient(93deg, rgba(57,126,244,1) 0%, rgba(73,223,143,1) 100%);
    transition: .4s ease-in-out;
  }
  .btn::after{
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    z-index: 0;
    background: rgba(73,223,143,1);
    background: linear-gradient(93deg, rgba(73,223,143,1) 0%, rgba(57,126,244,1) 100%);
    opacity: 0;
    transition: .4s ease-in-out;
  }
  .btn:hover::before{
    opacity: 0;
  }
  .btn:hover::after{
    opacity: 1;
  }
  .btnContainer{
    display: flex;
    margin-top: 30px;
    width: 100%;
  }
  .container.right .imgContent{
    flex-direction: row-reverse;
  }
  .container.right .imgContent .descr{
    padding-left: 0px;
    padding-right: 20px;
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .imgContent,.container.right .imgContent{
      flex-direction: column-reverse;
    }
    .descr{
      width: 100%;
    }
    .imgContainer{
      width: 100%;
      padding-top: 100%;
      margin-top: 40px;
    }
    .btn{
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
