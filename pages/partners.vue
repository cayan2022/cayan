<template>
  <section class="partners lg:pt-32 md:pt-14 sm:pt-14 pt-14 pb-10 bg-primary  general-pattern">
    <div class="container">
      <div class="heading pb-10 text-center">
        <h4 class="mb-5 text-secondary text-head font-body font-bold">شركاء النجاح</h4>
        <p class="text-white opacity-60 text-paragraph font-body font-normal">انتم الشريك الامثل لنا</p>
      </div>

      <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-7 ">
        <div class="box bg-semidark py-3 px-2" v-for="(partner, i) in partners" :key="i">
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
        }
      ]
    }
  },

  head() {
    return {title: this.$t(`home.title`)}
  }
}
</script>
