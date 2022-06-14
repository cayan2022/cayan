<template>
<section class="services general-pattern py-10 bg-primary">
  <div v-if="services" class="container mx-auto">
    <div class="heading py-5 text-center mb-20">
      <h4 class="text-head font-bold text-secondary mb-2">
        خدماتنا
      </h4>

      <p class="opacity-60 text-white text-paragraph ">
        نحن شريك في التفكير والتخطيط والتطوير لكل حاجاتك الرقمية والتسويقية، عزز كيانك بكيان
      </p>
    </div>

    <template v-for="(service, i) in services">
      <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-10" :key="service.code">
        <div class="image-content mb-32" :class="i%2===0?`order-last`:`order-first`">
          <img :src="`/img/services/${service.code}.svg`" loading="lazy" :alt="service.name" class="w-100">
        </div>

        <div class="content flex flex-col justify-center h-100 mb-32" :class="i%2===0?`order-first`:`order-last`">
          <h4 class="text-serviceHead text-secondary font-bold leading-10">
            <nuxt-link :to="localePath(`services-${service.code}`)">
              {{ service.name }}
            </nuxt-link>
          </h4>

          <p class="text-paragraph text-white font-light my-16 leading-10">
            {{ service.desc }}
          </p>

          <div class="button-content">
            <nuxt-link :to="localePath(`contact`)" class="custom-bnt yellow-btn font-body font-bold">
              <img src="/images/user.svg" loading="lazy" :alt="$t(`app.title`)" />
              <span>تحدث الي خبير</span>
            </nuxt-link>

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
