<template>
  <div :class="activeBurger ? 'activeBurger' : ''">
    {{$store.state.activeMenu}}
    <header :class="firstAnimation ? 'animHead' : ''">
      <router-link
        class="logo"
        to="/"
      >
        <svg width="160" height="60" viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="160" height="60">
            <rect width="160" height="60" fill="#C4C4C4"/>
          </mask>
          <g mask="url(#mask0)">
            <rect y="-50" width="160" height="160" fill="url(#pattern0)"/>
          </g>
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0" transform="scale(0.00390625)"/>
            </pattern>
            <image id="image0" width="256" height="256" xlink:href="data:image/png;base64,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"/>
          </defs>
        </svg>
      </router-link>
      <nav v-if="!mobileMode">
        <router-link
          v-for="nav in routes"
          :key="nav.id"
          :to="nav.route"
          class="medium"
          :class="$store.state.activeMenu == nav.id ? 'active' : ''"
          @click.native="closeBurger(),activeLinkFunc(nav.id)"
        >
          {{nav.title}}
        </router-link>
      </nav>
      <div class="downloadBtnContainer" v-if="!mobileMode">
        <a href="##" class="dwnlBtn medium"><span class="medium">download now</span></a>
      </div>
      <div class="burger" v-if="mobileMode">
        <div class="open" @click="openBurger()">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="3" y1="9" x2="29" y2="9" stroke="white" stroke-width="2"/>
            <line x1="3" y1="16" x2="29" y2="16" stroke="white" stroke-width="2"/>
            <line x1="3" y1="23" x2="29" y2="23" stroke="white" stroke-width="2"/>
          </svg>
        </div>
        <div class="close" @click="closeBurger()">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 5L5 27" stroke="white" stroke-width="2"/>
            <path d="M5 5L27 27" stroke="white" stroke-width="2"/>
          </svg>
        </div>
      </div>
    </header>
    <div class="fixedMenu" v-if="mobileMode">
      <nav>
        <router-link
          v-for="nav in routes"
          :key="nav.id"
          :to="nav.route"
          class="medium"
          :class="activeLink == nav.id ? 'active' : ''"
          @click.native="closeBurger(),activeLinkFunc(nav.id)"
        >
          {{nav.title}}
        </router-link>
      </nav>
      <div class="downloadBtnContainer">
        <a href="##" class="dwnlBtn medium"><span class="medium">download now</span></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeLink: 1,
      mobileMode: null,
      activeBurger: false,
      firstAnimation: false,
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
    mobileModeFunc () {
      if (window.innerWidth >= 768) {
        this.mobileMode = false
      } else {
        this.mobileMode = true
      }
    },
    myEventHandler (e) {
      this.mobileModeFunc()
    },
    openBurger () {
      this.activeBurger = true
    },
    closeBurger () {
      this.activeBurger = false
    },
    activeLinkFunc (id) {
      setTimeout(() => {
        this.activeLink = id
        this.$store.commit('setMenuStatus', id)
      }, 100)
      console.log(id)
    }
  },
  mounted () {
    this.mobileModeFunc()
    setTimeout(() => {
      this.firstAnimation = true
      this.$store.commit('setMenuStatus', null)
    }, 500)
  },
  created () {
    window.addEventListener('resize', this.myEventHandler)
  },
  destroyed () {
    window.removeEventListener('resize', this.myEventHandler)
  }
}
</script>
<style scoped>
  .logo{
    transition: .4s ease-in-out;
    transform: translateY(5px);
    opacity: 0;
  }
  .animHead .logo{
    transform: translateY(0px);
    opacity: 1;
  }
  header{
    background: #020B1D;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    position: fixed;
    width: 100%;
    z-index: 100;
    top: 0px;
    left: 0px;
  }
  nav{
      margin-left: 120px;
      transition: .4s ease-in-out;
      transform: translateY(5px);
      opacity: 0;
      transition-delay: .1s;
    }
  .animHead nav{
    transform: translateY(0px);
    opacity: 1;
  }
  header .downloadBtnContainer{
    transition: .4s ease-in-out;
    transform: translateY(5px);
    opacity: 0;
    transition-delay: .1s;
  }
  header.animHead  .downloadBtnContainer{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .2s;
  }
  nav a{
    text-transform: uppercase;
    font-size: 13px;
    color: rgba(255,255,255,.6);
    transition: .4s ease-in-out;
    margin-right: 50px;
    position: relative;
  }
  nav a:after{
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
  nav a:hover:after,nav a.active:after{
    transform: scaleX(1);
  }
  nav a:hover,nav a.active{
    color: #ffffff;
  }
  .downloadBtnContainer{
    display: flex;
    margin-left: auto;
  }
  .dwnlBtn{
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
  }
  .dwnlBtn span{
    position: relative;
    z-index: 3;
    color: #fff;
  }
  .dwnlBtn::before{
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
  .dwnlBtn::after{
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
  .dwnlBtn:hover::before{
    opacity: 0;
  }
  .dwnlBtn:hover::after{
    opacity: 1;
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    nav a {
      margin-right: 25px;
    }
    nav{
      margin-left: 60px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    header{
      height: 70px;
    }
    .logo svg{
      transform: scale(.7);
      transform-origin:left;
    }
    nav{
      margin-left: 0px;
    }
    nav a{
      margin-right: 20px;
    }
    .dwnlBtn{
      height: 40px;
      font-size: 13px;
      padding: 0px 15px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .close{
      transform: scale(0);
      pointer-events: none;
    }
    .activeBurger .open{
      transform: scale(0);
      pointer-events: none;
    }
    .activeBurger .close{
      transform: scale(1);
      pointer-events: all;
    }
    header{
      padding: 0px 16px;
    }
    .burger{
      margin-left: auto;
      margin-top: 5px;
      height: 32px;
      width: 32px;
      position: relative;
    }
    .burger div{
      position: absolute;
      right: 0px;
      top: 0px;
      transition: .4s ease-in-out;
    }
    .fixedMenu{
      position: fixed;
      width: 100%;
      height: calc(100vh - 70px);
      left: 0px;
      top: 70px;
      background: #020B1D;
      z-index: 100;
      padding: 25px 16px;
      transition: .4s ease-in-out;
      opacity: 0;
      pointer-events: none;
    }
    .activeBurger .fixedMenu{
      opacity: 1;
      pointer-events: all;
    }
    nav{
      flex-direction: column;
      display: flex;
      transition: .4s ease-in-out;
      transform: translateY(10px);
      opacity: 0;
    }
    .activeBurger nav{
      transform: translateY(0px);
      opacity: 1;
    }
    .downloadBtnContainer{
      transition: .4s ease-in-out;
      transform: translateY(10px);
      opacity: 0;
      transition-delay: .1s;
    }
    .activeBurger .downloadBtnContainer{
      transform: translateY(0px);
      opacity: 1;
    }
    nav a{
      margin-right: auto;
      font-size: 40px;
      margin-bottom: 15px;
    }
    .dwnlBtn{
      height: 48px;
      padding: 0px 30px;
      margin-top: 20px;
    }
  }
</style>
