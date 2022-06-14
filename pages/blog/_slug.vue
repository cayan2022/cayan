<template>
<section class="blog-details py-24 bg-primary  general-pattern">
  <div class="container">
    <div class="heading text-center mb-24">
      <h4 class="text-secondary font-bold font-body text-head mb-5">
        {{ doc.title }}
      </h4>

      <ul class="bread-curmb flex justify-center items-center content-center">
        <li class="px-4">
          <nuxt-link to="/" class="text-link text-white opacity-60 font-medium font-body">
            الرئيسية
          </nuxt-link>
        </li>

        <li class="px-4">
          <nuxt-link to="/blog" class="text-link text-white opacity-60 font-medium font-body">
            المدونة
          </nuxt-link>
        </li>

        <li class="px-4">
          <nuxt-link :to="doc.path" class="text-link text-white opacity-60 font-medium font-body">
            {{ doc.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>

    <div class="blog-post">
      <div class="image-content">
        <img :src="doc.photo" :alt="doc.title" :title="doc.title">
      </div>

      <div class="content text-white text-links leading-9 font-body font-medium">
        <nuxt-content :document="doc" />
      </div>

      <div class="button-contain">
        <a href="#" class="custom-bnt yellow-btn font-body font-normal">
          <span class=" font-normal font-body">شارك تلك المقالة</span>
        </a>

        <ul class="social-media">
          <li>
            <a href="#" class="social-link">
              <img src="/images/facebook.svg" :alt="$t(`app.title`)">
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <img src="/images/twitter.svg" :alt="$t(`app.title`)">
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <img src="/images/instagram.svg" :alt="$t(`app.title`)">
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <img src="/images/youtube.svg" :alt="$t(`app.title`)">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import format from 'date-fns/format'

export default {
  async asyncData({ $content, params }) {
    const doc = await $content(`blog/${params.slug}`).fetch()
    return { doc }
  },

  methods: { createdAt(createdAt) { return format(new Date(createdAt), 'MM/yyyy') } },

  head() {
    return {
      title: this.doc.title,
      meta: [
        { hid: 'description', name: 'description', content: this.doc.description },
        { hid: 'og:title', property: 'og:title', content: this.doc.title },
        { hid: 'og:description', property: 'og:description', content: this.doc.description },
        { hid: 'twitter:title', name: 'twitter:title', content: this.doc.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.doc.description }
      ]
    }
  }
}
</script>
