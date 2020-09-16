<template>
  <div class="container"  id="faq" data-aos="fade-up" v-view="visibilityChanged">
    <div class="faqContainer pT-140">
      <h3 class="medium font-72">Unium Responds</h3>
      <div class="faqInner">
        <div class="faqItem" v-for="faq in itemData" :key="faq.id" @click="openFaq(faq.id)" :class="activeFaq == faq.id ? 'active' : ''">
          <div class="ttlContainer">
            <div class="ttl">{{faq.question}}</div>
            <i>
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 1.5L10 10.5L1 1.5" stroke="#E8EBEF" stroke-width="2"/>
              </svg>
            </i>
          </div>
          <div class="questionContainer">
            <div class="questionInner">
              <p v-html="faq.answer"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    itemData: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      activeFaq: null
    }
  },
  methods: {
    visibilityChanged () {
      this.$store.commit('setMenuStatus', 4)
    },
    openFaq: function (id) {
      if (this.activeFaq !== id) {
        this.activeFaq = id
      } else {
        this.activeFaq = null
      }
      console.log('hi')
    }
  }
}
</script>
<style scoped>
  h3{
    color: #fff;
    margin-bottom: 65px;
    text-align: center;
  }
  .questionInner{
    padding-top: 25px;
    opacity: 0;
    transform: translateY(15px);
    transition: .4s ease-in-out;
  }
  .faqItem.active .questionInner{
    opacity: 1;
    transform: translateY(0px);
  }
  .questionInner p{
    font-size: 18px;
    line-height: 24px;
  }
  .questionContainer{
    max-height: 0px;
    transition: .4s ease-in-out;
    overflow: hidden;
  }
  .faqItem.active .questionContainer{
    max-height: 800px;
  }
  .faqItem{
    border-radius: 8px;
    background: #0F1728;
    padding: 25px 30px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: .4s ease-in-out;
  }
  .faqItem:hover{
    background: #1B2334;
  }
  .ttlContainer{
    display: flex;
    justify-content: space-between;
  }
  .ttl{
    transition: .4s ease-in-out;
    color: #fff;
    font-size: 24px;
    line-height: 34px;
  }
  .faqItem.active .ttl{
    color: #49DF8F;
  }
  .ttlContainer i{
    margin-top: 6px;
    transition: .4s ease-in-out;
  }
  .faqItem.active .ttlContainer i{
    transform: rotateZ(180deg) translateY(10px);
  }
  .container{
    position: relative;
    z-index: 2;
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    .ttl{
      font-size: 20px;
      line-height: 24px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    h3{
      margin-bottom: 40px;
    }
    .faqItem{
      padding: 15px;
    }
    .ttl{
      font-size: 16px;
      line-height: 20px;
    }
    .questionInner p{
      font-size: 13px;
      line-height: 20px;
    }
    i svg{
      transform: scale(.6);
    }
    .faqItem.active .ttlContainer i {
      transform: rotateZ(180deg) translateY(4px);
    }
  }
</style>
