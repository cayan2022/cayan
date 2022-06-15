<template>
<section class="people-say pt-12 pb-20 bg-primary">
  <div class="container mx-auto">
    <div class=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 ">
      <div class="say relative z-20 flex flex-col justify-center">
        <h4 class=" text-secondary font-bold text-head mb-5">قالوا عنا</h4>
        <p class="text-white opacity-60 text-paragraph">ماذا قال عملائنا الكريم عن تجربتهم في كبان</p>
      </div>
      <div class="swiper-content">
        <div class="swiper" v-swiper:swiper="options">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="content text-center py-10 bg-dark border-secondary border-2 px-10">
                <p class="text-white text-paragraph mb-12 leading-9 font-medium">
                  لوحة التحكم الخاصة بشركة كيان مميزة وسهلة الاستخدام وقامت بتييسير العمل علينا في مراكزنا الطبية
                </p>
                <h4 class="text-secondary text-paragraph font-bold "> د. مساعد المحرج</h4>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="content text-center py-10 bg-dark border-secondary border-2 px-10">
                <p class="text-white text-paragraph mb-12 leading-9 font-medium">
                  فريق كيان فريق مميز وقام بحل أكثر من مشكلة لدينا
                </p>
                <h4 class="text-secondary text-paragraph font-bold ">د. أنس الزلال</h4>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="content text-center py-10 bg-dark border-secondary border-2 px-10">
                <p class="text-white text-paragraph mb-12 leading-9 font-medium">
                  مدير التسويق محمود الزهري لديهم شخص كفء ويعتمد عليه
                </p>
                <h4 class="text-secondary text-paragraph font-bold "> أ/ نضال</h4>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="content text-center py-10 bg-dark border-secondary border-2 px-10">
                <p class="text-white text-paragraph mb-12 leading-9 font-medium">
                  تجربة رائعة مع فريق كيان في تطوير وتحسين منتجاتنا بالمتجر
                </p>
                <h4 class="text-secondary text-paragraph font-bold ">د.المنيعي</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      options: {
        loop: true,
        autoplay: { delay: 4000 },
        keyboard: true,
        centeredSlides: true,

        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },

        breakpoints: {
          1024: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          }
        }
      }
    };
  },
}
</script>
