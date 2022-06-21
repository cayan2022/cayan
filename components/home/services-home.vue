<template>
  <section class="services general-pattern py-10 bg-primary">
    <div v-if="services" class="container mx-auto">
      <div class="heading py-5 text-center mb-20">
        <h1 class="text-head font-bold text-secondary mb-2">
          خدماتنا
        </h1>

        <p class="opacity-60 text-white text-paragraph ">
        كيان شريكك في نجاحك للوصول لأهدافك الرقمية والتسويقية أطلق كيانك مع كيان
        </p>
      </div>

      <template v-for="(service, i) in services">
        <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:gap-10 md:gap-5 sm:gap-5 gap-5" :key="service.code">
          <div class="image-content lg:mb-32 md:mb-5 sm:mb-5 mb-5" :class="i%2===0?`lg:order-last md:order-1 sm:order-1 order-1`:`lg:order-first md:order-1 sm:order-1 order-1`">
            <img :src="`/img/services/${service.code}.svg`" loading="lazy" :alt="service.name" class="w-100">
          </div>

          <div class="content flex flex-col justify-center h-100 lg:mb-32 md:mb-10 sm:mb-10 mb-10" :class="i%2===0?`lg:order-first md:order-2 sm:order-2 order-2`:`lg:order-last md:order-2 sm:order-2 order-2`">
            <nuxt-link :to="localePath(`services-${service.code}`)" class="lg:text-serviceHead md:text-paragraph sm:text-paragraph text-paragraph text-secondary font-bold leading-10 block">
              {{ service.name }}
            </nuxt-link>

            <p class="text-paragraph text-white font-light lg:my-16 md:py-10 sm:py-7 py-7 leading-10">
              {{ service.desc }}
            </p>

            <div class="button-content">
              <button @click="whatsapp()" class="whatsapp-bnt custom-bnt yellow-btn font-body font-bold">
                <img src="/images/user.svg" loading="lazy" :alt="$t(`app.title`)" />
                <span>تحدث الي خبير</span>
              </button>

              <nuxt-link :to="localePath(`services-${service.code}`)"  class="custom-bnt main-btn font-body font-bold">
                <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />
                <span>المزيد</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState('home', { services: state => state.services })
  }
}
</script>
