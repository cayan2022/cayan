<template>
    <section class="service-data py-24 bg-primary  general-pattern">
        <div class="container">
            <div class="heading mb-5 text-center pb-14 ">
                <h4 class=" font-body font-semibold text-head text-white mb-5">تخطيط الإعلانات الرقمية</h4>
                <ul class="bread-curmb flex justify-center items-center content-center">
                    <li class="px-4">
                        <nuxt-link to="/" class="text-link text-white opacity-60 font-medium font-body">
                            الرئيسية
                        </nuxt-link>
                    </li>

                    <li class="px-4">
                        <span class="text-link text-white opacity-60 font-medium font-body">
                          تخطيط الإعلانات الرقمية
                        </span>
                    </li>
                </ul>
            </div>
             <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10">
                <div class="content h-100 flex flex-col justify-center">
                    <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                        هل تعاني من نقص المبيعات ؟
                    </h4>
                    <p class="text-white text-links font-body font-light leading-10 text-justify ">
                        "كيان" توفر لك خدمة "تخطيط الإعلانات الرقمية "
                        نقوم بادارة حملاتك الاعلانية  بواسطة فريق على أعلى مستوى من أجل وصول أسرع إلى عملائك وتقليل تكاليف الأعلانات وزيادة مردودها
                        سواء عبر مواقع التواصل أو محركات البحث "Google Ads" فأن كيان تضمن لك استراتيجية مُحكمة من أجل زيادة مبيعاتك والوصول إلى مزيد من العملاء المحتملين
                    </p>
                </div>
                <div class="image-content image-data">
                    <img src="/images/data.svg"  :alt="$t(`app.title`)">
                </div>
                <div class="image-content">
                    <img src="/images/team_work.svg"  :alt="$t(`app.title`)">
                </div>
                <div class="content  h-100 flex flex-col justify-center">
                    <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                        هل تبحث عن أداء أفضل لحملاتك التسويقية ؟
                    </h4>
                    <p class="text-white text-links font-body font-light leading-10 text-justify ">
                        فريق عملنا يقوم بعمل بقياس دوري للأداء الخاص بالحملات الإعلانية منها معدلات الوصول , معدلات المبيعات والتحويل الخاص بالعملاء المحتملين.
                        كما نقوم بمراقبة وتحليل المنافسين ، لنحقق لك ما تريد وأكثر مما تتوقع في نتائج الإعلانات
                    </p>
                </div>
            </div>
            <div class="message py-20 px-10 w-full bg-dark relative flex flex-col justify-center text-center ">
                <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                    تواصل الأن لطلب خدمتنا المميزة
                </h4>
                <p class="text-white text-links font-body font-light leading-10 mb-5">
                    لا تتردد في التواصل معنا لطلب الخدمة على أيدي الخبراء من المختصين لتخطيط الإعلانات لرقمية
                </p>
                <nuxt-link to="/contact"  class="custom-bnt yellow-btn font-body font-bold ">
                    <img src="/images/back_button.svg" :alt="$t(`app.title`)" />
                    <span>اطلب خدمتك</span>
                </nuxt-link>
                <img class="brid-pattern" src="/images/brid.svg" loading="lazy" :alt="$t(`app.title`)">
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
        activeTab: "allProject"
    }
  },

  head() { return { title: this.$t(`home.title`) } }
}
</script>
