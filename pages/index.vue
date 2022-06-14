<template>
<div>
  <header-about />

  <div>
    <services-home />

    <section class="py-12 bg-secondary cayan-say">

      <div class="container mx-auto">
        <div class="content w-100 text-center flex flex-col justify-center items-center content-center">
          <img class="brand-name" src="/images/cayanlogo.svg" width="86" height="100" loading="lazy" :alt="$t(`app.title`)">

          <p class=" text-primary lg:w-4/6	md:w-3/6	sm:w-full mx-auto text-paragraph mt-6 leading-10">
            نحن كيان لكَ في عالم يُقيم أياً كانَ بمكانته الرقمية، وخدماته الإلكترونية، واستراتيجيته التسويقية .. عَزز قُدراتك
            بِكيان من كل عبقري وفنان
          </p>
        </div>
      </div>
    </section>

<!--      <team-work />-->

    <section class="philosophy lg:py-9 md:py-5 sm:py-4 bg-primary">
      <div class="container mx-auto">
        <div class="heading py-5 text-center mb-20">
          <h4 class="text-head font-bold text-secondary mb-2">
            فلسفة كيان
          </h4>

          <p class="opacity-60 text-white text-paragraph ">
            فلسفة تسعى كيان لتحقيقها بين قاعدة عملائها
          </p>
        </div>
        <div class="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-6">
          <div class="content py-16 relative z-50 overflow-hidden  lg:px-32 md:px-20 sm:px-8 bg-dark">
            <p class="text-white font-medium leading-9 text-paragraph text-center ">
              نحن كيان لكَ في عالم يُقيم أياً كانَ بمكانته الرقمية، وخدماته الإلكترونية، واستراتيجيته التسويقية ..
              عَزز قُدراتك
            </p>

            <img class="brid-pattern" src="/images/brid.svg" loading="lazy" :alt="$t(`app.title`)">
          </div>
        </div>
      </div>
    </section>

    <contact />

    <people-say />
  </div>
</div>
</template>

<script>

export default {
  layout: `home`,
  scrollToTop: true,

  components: {
    headerAbout: () => import(`@/components/home/header-about`),
    teamWork: () => import(`@/components/home/team-work`),
    contact: () => import(`@/components/home/contact`),
    peopleSay: () => import(`@/components/home/people-say`),
    servicesHome: () => import(`@/components/home/services-home`),
  },

  nuxtI18n: { locales: ['ar'] },

  head() { return { title: this.$t(`home.title`) } }
}
</script>
