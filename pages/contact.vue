<template>
  <contact class="lg:pt-32 md:pt-14 sm:pt-14 pt-14 pb-10" />
</template>

<script>
export default {
  layout: `home`,
  scrollToTop: true,

  components: {
    contact: () => import(`@/components/home/contact`),
  },

  nuxtI18n: { locales: ['ar'] },

  head() { return { title: this.$t(`home.title`) } }
}
</script>
