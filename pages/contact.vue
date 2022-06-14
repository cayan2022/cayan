<template>
<contact class="pt-20" />
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
