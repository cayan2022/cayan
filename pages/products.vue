<template>
  <section class="products lg:pt-32 md:pt-14 sm:pt-14 pt-14 pb-10 bg-primary general-pattern">
    <div class="container">
      <div class="heading text-center mb-10">
        <h1 class="text-secondary text-head mb-4 font-body font-bold">
          منتجاتنا
        </h1>

        <p class="text-white opacity-60 font-medium font-body">
          نحن نقدم لكم منتجاتنا لخدمتكم
        </p>
      </div>

      <div class="grid lg:grid-cols-4  md:grid-cols-4 sm:grid-cols-1 gap-5">
        <div class="box mx-auto">
          <div class="image-content">
            <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)">
          </div>

          <div class="content flex flex-col justify-center items-center content-center ">
            <p class=" text-secondary text-paragraph font-body font-semibold mb-5">نظام ابتكار</p>

            <a href="https://ebtekar.online/" target="_blank" class="custom-bnt yellow-btn font-body font-bold">
              <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

              <span>مشاهده المنتج</span>
            </a>
            </div>
        </div>

        <div class="box mx-auto">
          <div class="image-content">
            <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)">
          </div>

          <div class="content flex flex-col justify-center items-center content-center ">
            <p class=" text-secondary text-paragraph font-body font-semibold mb-5">
              Bznis
            </p>

            <a href="https://ebtekar.online/" target="_blank" class="custom-bnt yellow-btn font-body font-bold">
              <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

              <span>مشاهده المنتج</span>
            </a>
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

  head() { return { title: this.$t(`home.title`) } }
}
</script>
