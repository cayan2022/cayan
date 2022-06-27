<template>
<section class="clients lg:pt-32 md:pt-14 sm:pt-14 pt-14 pb-10 bg-primary general-pattern ">
  <div class="container">
    <div class="heading pb-10 text-center">
      <h1 class="text-secondary text-head font-body font-bold mb-5">
        عملاؤنا
      </h1>

      <p class="text-white opacity-60 font-body font-normal">
        انتم شركاء نجاحنا
      </p>
    </div>

    <div class="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-6">
      <div class="box" v-for="(partner, i) in partners" :key="i">
        <div class="image-content">
          <img :src="`/img/clients/${partner.img}.webp`" :alt="$t(`app.title`)">
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
export default {
  layout: `home`,
  scrollToTop: true,

  nuxtI18n: { locales: ['ar'] },

  data() {
    return {
      partners: [
        {
          img: 'client_1'
        }, {
          img: 'client_2'
        }, {
          img: 'client_3'
        }, {
          img: 'client_4'
        }, {
          img: 'client_5'
        }, {
          img: 'client_6'
        }, {
          img: 'client_7'
        }, {
          img: 'client_8'
        }, {
          img: 'client_9'
        }, {
          img: 'client_10'
        }, {
          img: 'client_11'
        }, {
          img: 'client_12'
        }, {
          img: 'client_13'
        }, {
          img: 'client_14'
        }, {
          img: 'client_15'
        }, {
          img: 'client_16'
        }, {
          img: 'client_17'
        }, {
          img: 'client_18'
        }, {
          img: 'client_19'
        }, {
          img: 'client_20'
        }, {
          img: 'client_21'
        }, {
          img: 'client_22'
        }, {
          img: 'client_23'
        }, {
          img: 'client_24'
        }, {
          img: 'client_25'
        }, {
          img: 'client_26'
        }, {
          img: 'client_27'
        }, {
          img: 'client_28'
        }, {
          img: 'client_29'
        }
      ]
    }
  },

  head() { return { title: this.$t(`home.title`) } }
}
</script>
