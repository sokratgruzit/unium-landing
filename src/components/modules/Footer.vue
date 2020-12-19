<template>
  <footer>
    <div class="container" data-aos="fade-up">
      <div class="left">
        <div class="navContainer">
          <a href="/" class="logo" @click="scrollToTopSec" v-smooth-scroll>
            <img src="@/assets/img/logoFoot.svg" alt="">
          </a>
          <div class="nav">
            <router-link
              v-for="nav in routes"
              :key="nav.id"
              :to="nav.route"
              class="medium"
              :class="$store.state.activeMenu == nav.id ? 'active' : ''"
              @click.native="activeLinkFunc(nav.id)"
            >
              {{nav.title}}
            </router-link>
          </div>
        </div>
        <div class="txt">Disclaimer: Unium Wallet is a software platform ONLY and does not conduct any independent diligence on or substantive review of any blockchain asset, digital currency, cryptocurrency or associated funds. You are fully and solely responsible for evaluating your investments,
          for determining whether you will exchange blockchain assets based on your own, and for all your decisions as to whether to exchange blockchain assets with Unium Wallet. In many cases, blockchain assets you exchange on the basis of your research may not increase in value, and may decrease in value. Similarly, blockchain assets you exchange on the basis of your research may increase in value after your exchange. Past performance is not indicative of future results. Any investment in blockchain assets involves the risk of loss of part or all of your investment. The value of the blockchain assets you exchange is subject to market and other investment risks.</div>
      </div>
      <div class="right">
        <h4>Sign up to Receive Updates</h4>
        <div class="inputContainer">
          <input type="text" placeholder="E-mail">
          <button>
            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z" fill="#DF6565"/>
            </svg>
          </button>
        </div>
        <div class="socs">
          <a href="##">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.32" clip-path="url(#clip0)">
                <path d="M11.9985 0C5.373 0 0 5.50867 0 12.3041C0 17.7393 3.438 22.3503 8.208 23.9787C8.808 24.092 9.027 23.7121 9.027 23.3858C9.027 23.0932 9.0165 22.3196 9.0105 21.2933C5.673 22.0362 4.968 19.6434 4.968 19.6434C4.4235 18.2218 3.636 17.8434 3.636 17.8434C2.5455 17.0806 3.717 17.0959 3.717 17.0959C4.9215 17.1832 5.5545 18.3643 5.5545 18.3643C6.6255 20.2439 8.364 19.7016 9.048 19.3861C9.156 18.591 9.4665 18.0487 9.81 17.7408C7.146 17.4298 4.344 16.3744 4.344 11.6607C4.344 10.3173 4.812 9.21891 5.58 8.35799C5.4555 8.04701 5.0445 6.79546 5.697 5.10272C5.697 5.10272 6.705 4.77184 8.997 6.36347C9.954 6.09079 10.98 5.95445 12.0015 5.94986C13.02 5.95599 14.0475 6.09079 15.006 6.365C17.2965 4.77337 18.303 5.10425 18.303 5.10425C18.957 6.79852 18.546 8.04855 18.423 8.35952C19.1925 9.22044 19.656 10.3188 19.656 11.6623C19.656 16.3882 16.851 17.4283 14.178 17.7331C14.6085 18.1131 14.9925 18.8637 14.9925 20.0111C14.9925 21.6563 14.9775 22.9829 14.9775 23.3858C14.9775 23.7152 15.1935 24.0981 15.8025 23.9771C20.565 22.3472 24 17.7377 24 12.3041C24 5.50867 18.627 0 11.9985 0Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="##">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.32">
                <path d="M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6264 0 12 0ZM17.4791 9.35632C17.4844 9.47443 17.4869 9.59308 17.4869 9.71228C17.4869 13.3519 14.7166 17.5488 9.65021 17.549H9.65039H9.65021C8.09473 17.549 6.64728 17.0931 5.42834 16.3118C5.64386 16.3372 5.86322 16.3499 6.08533 16.3499C7.37585 16.3499 8.56348 15.9097 9.50629 15.1708C8.30054 15.1485 7.28394 14.3522 6.93311 13.2578C7.10101 13.29 7.27368 13.3076 7.45074 13.3076C7.70215 13.3076 7.94568 13.2737 8.17712 13.2105C6.91681 12.9582 5.96741 11.8444 5.96741 10.5106C5.96741 10.4982 5.96741 10.487 5.96777 10.4755C6.33893 10.6818 6.76337 10.806 7.21527 10.8199C6.47571 10.3264 5.98956 9.48285 5.98956 8.52722C5.98956 8.02258 6.12598 7.5498 6.36255 7.14276C7.72083 8.80939 9.75073 9.90546 12.0399 10.0206C11.9927 9.81885 11.9683 9.60864 11.9683 9.39258C11.9683 7.87207 13.2019 6.63849 14.723 6.63849C15.5153 6.63849 16.2308 6.97339 16.7335 7.50879C17.361 7.38501 17.9502 7.15576 18.4825 6.84027C18.2765 7.48315 17.84 8.02258 17.2712 8.36371C17.8284 8.29706 18.3594 8.14929 18.8529 7.92993C18.4843 8.48236 18.0168 8.96759 17.4791 9.35632Z" fill="white"/>
              </g>
            </svg>
          </a>
          <a href="##">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.32">
                <path d="M24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C12.0703 24 12.1406 24 12.2109 23.9953V14.6578H9.63281V11.6531H12.2109V9.44062C12.2109 6.87656 13.7766 5.47969 16.0641 5.47969C17.1609 5.47969 18.1031 5.55938 18.375 5.59688V8.27813H16.8C15.5578 8.27813 15.3141 8.86875 15.3141 9.73594V11.6484H18.2906L17.9016 14.6531H15.3141V23.5359C20.3297 22.0969 24 17.4797 24 12Z" fill="white"/>
              </g>
            </svg>
          </a>
        </div>
        <div class="secondaryNav">
          <a href="##">Terms of Serivce</a>
          <a href="##">Privacy Policy</a>
        </div>
        <div class="copy">© Unium 2020. All rights reserved</div>
        <div class="txt2">Disclaimer: Unium Wallet is a software platform ONLY and does not conduct any independent diligence on or substantive review of any blockchain asset, digital currency, cryptocurrency or associated funds. You are fully and solely responsible for evaluating your investments,
          for determining whether you will exchange blockchain assets based on your own, and for all your decisions as to whether to exchange blockchain assets with Unium Wallet. In many cases, blockchain assets you exchange on the basis of your research may not increase in value, and may decrease in value. Similarly, blockchain assets you exchange on the basis of your research may increase in value after your exchange. Past performance is not indicative of future results. Any investment in blockchain assets involves the risk of loss of part or all of your investment. The value of the blockchain assets you exchange is subject to market and other investment risks.</div>
      </div>
    </div>
    <div class="btnUpContainer">
      <a href="#main" v-smooth-scroll class="btnUp" @click="scrollToTop">
        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538407 7.04738 0.538407 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 21L9 1L7 1L7 21L9 21Z" fill="white"/>
        </svg>
      </a>
    </div>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      activeLink: 1,
      routes: [
        {
          id: 1,
          title: 'features',
          route: {
            name: 'Home',
            params: {
              id: this.$route.params.id
            },
            hash: '#features'
          }
        },
        {
          id: 2,
          title: 'assets',
          route: {
            name: 'Home',
            params: {
              id: this.$route.params.id
            },
            hash: '#assets'
          }
        },
        {
          id: 3,
          title: 'reviews',
          route: {
            name: 'Home',
            params: {
              id: this.$route.params.id
            },
            hash: '#reviews'
          }
        },
        {
          id: 4,
          title: 'faq',
          name: 'Home',
          route: {
            name: 'Home',
            params: {
              id: this.$route.params.id
            },
            hash: '#faq'
          }
        },
        {
          id: 5,
          title: 'about',
          route: '/about'
        }
      ]
    }
  },
  methods: {
    activeLinkFunc (id) {
      this.activeLink = id
    },
    scrollToTop () {
      // window.scrollTo(0, 0)
      setTimeout(() => {
        this.$store.commit('setMenuStatus', 0)
      }, 1000)
    },
    scrollToTopSec () {
      window.scrollTo(0, 0)
      setTimeout(() => {
        this.$store.commit('setMenuStatus', 0)
      }, 1000)
    }
  }
}
</script>
<style scoped>
  .btnUpContainer{
    position: fixed;
    height: calc(100vh - 100px);
    right: 0px;
    top: 0px;
    z-index: 1000;
    display: flex;
    align-items: center;
  }
  .btnUp{
    transition: .4s ease-in-out;
    transform: scale(0);
    height: 64px;
    width: 64px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 310px;
    cursor: pointer;
  }
  .aos-animate ~ .btnUpContainer .btnUp{
    transform: scale(1);
  }
  .btnUp svg{
    position: relative;
    z-index: 3;
  }
  .btnUp::before{
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
    border-radius: 50%;
  }
  .btnUp::after{
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
    border-radius: 50%;
  }
  .btnUp:hover::before{
    opacity: 0;
  }
  .btnUp:hover::after{
    opacity: 1;
  }
  .copy{
    margin-top: 16px;
    font-size: 14px;
  }
  .secondaryNav a{
    margin-right: 25px;
    color: #fff;
    transition: .4s ease-in-out;
  }
  .secondaryNav a:hover{
    opacity: .6;
  }
  button{
    position: absolute;
    right: 20px;
    top: 16px;
  }
  button path{
    transition: .4s ease-in-out;
  }
  button:hover path{
    fill: #397EF4;
  }
  .inputContainer{
    position: relative;
  }
  input{
    height: 48px;
    width: 100%;
    border-radius: 24px;
    background: rgba(255,255,255,.08);
    padding: 0px 20px;
    display: flex;
    align-items: center;
    border: 2px solid rgba(255,255,255,0);
    transition: .4s ease-in-out;
  }
  input:focus{
    background: rgba(255,255,255,1);
    color: #020B1D;
  }
  input::placeholder{
    transition: .4s ease-in-out;
  }
  input:focus::placeholder{
    color: #020B1D;
  }
  h4{
    font-size: 20px;
    line-height: 28px;
    color: #fff;
    margin-bottom: 18px;
    margin-top: 16px;
  }
  .txt{
    font-size: 12px;
    line-height: 17px;
    margin-top: auto;
    width: 80%;
  }
  .left{
    width: calc(100% - 270px);
    display: flex;
    flex-direction: column;
  }
  .navContainer{
    display: flex;
    align-items: center;
  }
  .nav{
    margin-top: 4px;
  }
  .nav a{
    text-transform: uppercase;
    font-size: 13px;
    color: rgba(255,255,255,.6);
    transition: .4s ease-in-out;
    margin-right: 50px;
    position: relative;
  }
  .nav a:after{
    content: '';
    height: 2px;
    background: #397EF4;
    width: 100%;
    position: absolute;
    left: 0px;
    bottom: -8px;
    transition: .4s ease-in-out;
    transform-origin: left;
    transform: scaleX(0);
  }
  .nav a:hover:after,.nav a.router-link-active:after{
    transform: scaleX(1);
  }
  .nav a:hover,.nav a.router-link-active{
    color: #ffffff;
  }
  .nav{
    margin-left: 120px;
  }
  .socs{
    margin-left: auto;
    display: flex;
    margin-top: 40px;
    margin-bottom: 25px;
  }
  .socs a{
    transition: .4s ease-in-out;
    margin-left: 8px;
  }
  .socs a g{
    transition: .4s ease-in-out;
  }
  .socs a:hover g{
    opacity: 1;
  }
  .socs a:hover{
    transform: translateY(-3px);
  }
  footer{
    position: relative;
    z-index: 3;
    padding-bottom: 40px;
  }
  .logo img{
    opacity: .6;
    transition: .6s ease-in-out;
  }
  .logo:hover img{
    opacity: 1;
  }
  .txt2{
    display: none;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .btnUp{
      right: 71px;
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    .btnUp{
      right: 30px;
    }
    .nav a {
      margin-right: 25px;
    }
    .nav{
      margin-left: 30px;
    }
    .txt{
      width: 90%;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .btnUpContainer{
      display: none;
    }
    .secondaryNav a{
      margin-right: 10px;
    }
    .logo img {
      transform: scale(.7);
      transform-origin: left;
    }
    .nav{
      margin-left: -15px;
    }
    .right{
      width: 200px;
    }
    .left{
      width: calc(100% - 200px);
    }
    .nav a {
      margin-right: 15px;
    }
    h4{
      font-size: 16px;
      margin-top: 18px;
    }
    .txt{
      font-size: 12px;
      line-height: 17px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .container{
      flex-direction: column;
    }
    .left{
      flex-direction: column;
      width: 100%;
    }
    .navContainer{
      flex-direction: column;
    }
    .txt{
      display: none;
    }
    .nav{
      width: 100%;
      flex-wrap: wrap;
      display: flex;
      justify-content: center;
      margin-left: 0px;
    }
    .nav a{
      width: 33.3%;
      margin-right: 0px;
      text-align: center;
      margin-top: 30px;
      font-size: 13px;
    }
    .nav a::after{
      display: none;
    }
    .logo img{
      transform: scale(1);
      transform-origin: center;
    }
    .right{
      width: 100%;
    }
    h4{
      text-align: center;
      font-size: 20px;
      line-height: 28px;
      margin-top: 20px;
    }
    .socs{
      justify-content: center;
    }
    .secondaryNav a{
      margin: 0px 12px;
    }
    .secondaryNav{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .copy{
      text-align: center;
    }
    .txt2{
      font-size: 12px;
      line-height: 17px;
      margin-top: 40px;
      text-align: center;
      display: flex;
      width: 100%;
    }
  }
</style>
