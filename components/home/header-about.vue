<template>
<header class="bg-primary pt-36 pb-36">
  <div class="container mx-auto">
    <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
      <div class="md:col-span-1 h-100">
        <div class="content">
          <h4 class="text-secondary font-bold text-head">
            {{ $t(`home.intro_title`) }}
          </h4>

          <p class="text-white text-paragraph leading-10 my-10">
          خبراء صناعة المواقع الإلكترونية والإعلانات وتخطيط التسويق الرقمي، ونخبة من الفنانين والمصممين، كل ذلك يندمج في كيان واحد ليٌصبح طرفًا فاعلاً في كيانك التجاري
          </p>

          <nuxt-link to="/contact" class="custom-bnt yellow-btn font-body font-bold">
            <img src="/images/back_button.svg" :alt="$t(`app.title`)" />

            <span>تحدث إلى خبير</span>
          </nuxt-link>
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
