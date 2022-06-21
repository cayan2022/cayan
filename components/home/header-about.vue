<template>
<header class="bg-primary pt-36 lg:pb-36 md:pb-10 sm:pb-10 pb-10">
  <div class="container mx-auto">
    <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
      <div class="md:col-span-1 h-100">
        <div class="content">
          <h1 class="text-secondary font-bold text-serviceHead">
            {{ $t(`home.intro_title`) }}
          </h1>

          <p class="text-white text-paragraph leading-8 my-10 text-justify">
            نساعدك في بناء كيانك الرقمي  وحملاتك الإعلانية وصناعة محتواك الرقمي  بإبداع مع حسن التخطيط والإدارة .
            مع فريق كيان نصنع من كل مبدع فنان
          </p>

          <button @click="whatsapp()" class="whatsapp-bnt custom-bnt yellow-btn font-body font-bold">
            <img src="/images/back_button.svg" :alt="$t(`app.title`)" />

            <span>تحدث إلى خبير</span>
          </button>
        </div>
      </div>

      <div @click="video = true" class="video-content">
        <span v-if="!video" class="cursor-pointer load">
          <img src="/images/play.svg" width="35" height="35" :alt="$t(`app.title`)">
        </span>

        <video ref="video" controls preload="none" height="100%" width="100%" poster="/images/brand_mask.png" class="p-4">
          <source src="/video/cayan-intro.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
</header>
</template>

<script>
export default {
  data: () => ({
    video: false
  }),

  watch: {
    video(value) {
      if (value) this.$refs.video.play()
    }
  }
}
</script>
