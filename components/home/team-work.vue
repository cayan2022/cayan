<template>
<!--start team work-->
<section class="pt-24 pb-5 bg-primary general-pattern team-work">
  <div class="container mx-auto">
    <div class="heading mb-10 text-center">
      <h1 class="text-secondary text-head font-bold mb-2">
        فريق عمل كيان
      </h1>

      <p class="text-white opacity-60 text-paragraph font-normal">
        فريق عريق، وقدرات استثنائية، يجمنا الشغف وتحركنا الإنتاجية
      </p>
    </div>

    <div class="swiper" v-swiper:swiper="options">
      <div class="swiper-wrapper">
        <template  v-for="team in teams">
          <nuxt-link  :to="`/team-member/${team.code}`" class="swiper-slide box-team px-3 py-3 flex items-center content-center text-center justify-center flex-col" :key="team.code">
            <div class="image-content w-44 h-44 overflow-hidden rounded-full">
              <img :src="`/images/${team.imgSrc}`" width="175" height="175" loading="lazy" class="w-full h-full object-cover object-top" :alt="team.name">
            </div>

            <div class="content pt-10 text-center">
              <h2 class=" text-white text-team font-bold  mb-5">{{team.name}}</h2>

              <p class="text-secondary text-links font-normal">{{team.job}}</p>
            </div>
          </nuxt-link>
        </template>
      </div>

      <div id="team-swiper-pagination" class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
  </div>
</section>
</template>

<script>
import {mapState} from "vuex"
export default {

  computed: {
    ...mapState('home', { teams: state => state.team })
  },
  data() {
    return {
      options: {
        loop: true,
        autoplay: { delay: 4000 },
        keyboard: true,

        pagination: {
          el: '#team-swiper-pagination',
          dynamicBullets: true
        },

        slidesPerView: 1,
        spaceBetween: 10,

        breakpoints: {
           320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
           768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }
      }
    };
  },
}
</script>
