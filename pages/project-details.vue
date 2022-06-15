<template>
  <section class="project-details  general-pattern bg-primary lg:py-14">
    <div class="container">
      <div class="heading text-center mb-10">
        <h1 class="text-secondary font-bold font-body text-head mb-5 ">
          تصميم موقع ابتكار
        </h1>

        <ul class="bread-curmb flex justify-center items-center content-center mb-10">
          <li class="px-4">
            <nuxt-link class="text-link text-white opacity-60 font-medium font-body" to="/">
              الرئيسيه
            </nuxt-link>
          </li>

          <li class="px-4">
            <nuxt-link  class="text-link text-white opacity-60 font-medium font-body" to="/projects">
              معرض الاعمال
            </nuxt-link>
          </li>

          <li class="px-4">
            <span  class="text-link text-white opacity-60 font-medium font-body">
              تصميم موقع ابتكار
            </span>
          </li>
        </ul>

          <div class="project-box">
            <div class="button-box py-5 w-full bg-semidark mb-10 px-4 flex justify-center items-center content-center ">
              <a href="#" class="custom-bnt yellow-btn font-body font-bold">
                <img src="/images/back_button.svg" :alt="$t(`app.title`)" />
                <span>شاهد المشروع</span>
              </a>

              <a href="#" class="custom-bnt main-btn font-body font-bold" >
                <img src="/images/back_button.svg" :alt="$t(`app.title`)" />
                <span>شاهد التصميم</span>
              </a>
            </div>

            <div class="image-content mb-6">
              <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)">
            </div>

              <div class="button-box py-5 w-full bg-semidark px-4 flex justify-start items-center content-center ">
                  <h1 class="text-white text-links font-body font-bold lg:pl-10 md:pl:10 sm:pl-0">
                    التقنيات المستخدمة
                  </h1>

                  <div class="custom-bnt yellow-btn font-body font-bold">
                    <span>
                      Adobe XD
                    </span>

                    <img src="/images/xd.svg" loading="lazy" :alt="$t(`app.title`)" />
                  </div>

                  <div class="custom-bnt yellow-btn font-body font-bold">
                    <span>
                      Wordpress
                    </span>

                    <img src="/images/wordpress.svg" loading="lazy" :alt="$t(`app.title`)" />
                  </div>

                  <div class="custom-bnt yellow-btn font-body font-bold">
                    <span>
                      PHP
                    </span>

                    <img src="/images/php.svg" loading="lazy" :alt="$t(`app.title`)" />
                  </div>
              </div>

              <div class="head py-10 text-center">
                <h1 class="text-head text-secondary font-bold font-body mb-5">
                  نبذة عن المشروع
                </h1>

                <p class="text-link text-white opacity-60 font-body font-normal">
                  التعريف بالمشروع في سطور بسيطة
                  </p>
              </div>

              <div class="content mb-0">
                <p class=" text-white text-links leading-9 font-body font-medium ">
                  هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص.
                  إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما
                  تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة
                  هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص.
                  إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما
                  تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة
                </p>
              </div>

              <div class="head py-4 text-center">
                <h1 class="text-head text-secondary font-bold font-body mb-5">
                  صور من المشروع
                </h1>

                <p class="text-link text-white opacity-60 font-body font-normal">
                  بعض اسكرينات المشروع المصممة
                </p>
              </div>

              <div class="swiper" v-swiper:swiper="options">
                <div class="swiper-wrapper pb-10">
                  <div class="swiper-slide">
                    <div class="image-slide-content">
                      <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="image-slide-content">
                      <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                    </div>
                  </div>

                  <div class="swiper-slide">
                      <div class="image-slide-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="image-slide-content">
                      <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                    </div>
                  </div>
                </div>

                <div class="swiper-pagination swiper-pagination-bullets"></div>
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

  data() {
    return {
      options: {
        loop: true,
        centeredSlides: false,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }
      }
    };
  },

  nuxtI18n: { locales: ['ar'] },

  head() { return { title: this.$t(`home.title`) } }
}
</script>
