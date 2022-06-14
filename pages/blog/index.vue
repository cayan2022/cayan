<template>
<section class="blog general-pattern bg-primary lg:py-24">
  <div class="container">
    <div class="text-center heading  mb-24">
      <h4 class=" text-secondary font-bold font-body text-head mb-5">
        مدونة كيان
      </h4>

      <p class="text-white opacity-60  font-medium font-body text-paragraph">
        زكاة العلم نشره
      </p>
    </div>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
      <template v-for="(doc, i) in docs">
        <div class="box" :key="i">
          <div class="image-content">
            <img :src="doc.photo" :alt="doc.title" :title="doc.title">
          </div>

          <div class="content py-3">
            <h4 class="text-paragraph text-secondary font-body font-bold mb-7">
              {{ doc.title }}
            </h4>

            <p class="text-link text-white font-body font-normal leading-8 mb-7 ">
              {{ doc.description }}
            </p>

            <nuxt-link :to="doc.path" class="custom-bnt yellow-btn font-body font-bold">
              <img src="/images/back_button.svg" alt="مدونة كيان" />

              <span>اقرأ المقال</span>
            </nuxt-link>
          </div>
        </div>
      </template>
    </div>
  </div>
</section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const docs = await $content(`blog`)
      .where({ public: true })
      .sortBy('createdAt', 'desc')
      .fetch()
    return { docs }
  },

  head() {
    return {
      title: `مدونة كيان`,
      meta: [{
        hid: `description`,
        name: `description`,
        content: `مدونة تقنية معلومات وأخبار وفوائد`
      }]
    }
  }
}
</script>
