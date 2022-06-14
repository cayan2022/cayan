<template>
    <section class="service-data general-pattern py-10 bg-primary">
        <div class="container">
            <div class="heading mb-5 text-center pb-14 ">
                <h4 class=" font-body font-semibold text-head text-white mb-5">إدارة التسويق الرقمي </h4>
                <ul class="bread-curmb flex justify-center items-center content-center">
                    <li class="px-4">
                        <nuxt-link to="/" class="text-link text-white opacity-60 font-medium font-body">
                            الرئيسية
                        </nuxt-link>
                    </li>

                    <li class="px-4">
                        <span class="text-link text-white opacity-60 font-medium font-body">
                            إدارة التسويق الرقمي
                        </span>
                    </li>
                </ul>
            </div>
            <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10">
                <div class="content h-100 flex flex-col justify-center">
                    <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                        لماذا عليك البدء في التسويق الرقمي الأن ؟
                    </h4>
                    <h6 class=" text-secondary text-links font-body font-semibold mb-3">
                        مواكبة العصر
                    </h6>
                    <p class="text-white text-links font-body font-light leading-10 text-justify  mb-5 ">
                        العصر الحالي "عصر الديجيتال" ، إذا لم يكن لك وجود رقمي فأنت غير موجود
                    </p>
                    <h6 class=" text-secondary text-links font-body font-semibold mb-3">
                        تقليص التكاليف
                    </h6>
                    <p class="text-white text-links font-body font-light leading-10 text-justify  mb-5 ">
                        تكاليف التسويق الرقمي تعد منخفضة بالنسبة للتسويق التقليدي بالإضافة إلى تعاظم دورها ونتائجها عبر السنوات الأخيرة
                    </p>
                    <h6 class=" text-secondary text-links font-body font-semibold mb-3">
                        قياس النتائج
                    </h6>
                    <p class="text-white text-links font-body font-light leading-10 text-justify  mb-5 ">
                        الان بأمكانك قياس دقيق لكل حملاتك التسويقية ومقارنتها باداء منافسيك بسهولة تامة ٫ كما بامكانك جمع بيانات عملائك واعادة استهدافهم من أجل ضمان بقائهم كعملاء و شركاء نجاح
                    </p>
                </div>
                <div class="image-content">
                    <img src="/images/segment_analysis.svg" :alt="$t(`app.title`)">
                </div>
                <div class="image-content">
                    <img src="/images/split_testing.svg" :alt="$t(`app.title`)">
                </div>
                <div class="content  h-100 flex flex-col justify-center">
                    <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                        ماذا نقدم لك ؟
                    </h4>
                    <p class="text-white text-links font-body font-light leading-10 text-justify ">
                        هل ترغب في الحصول على نتائج مؤكدة بأيدي خبراء تسويق محترفين ؟
                        كيان تقدم لك ادارة شاملة للتسويق الرقمي قائمة على استراتيجية متكاملة بدءا من تحليل المنافسين ومنصاتهم الرقمية مروراً بتحليل منصاتك وخطط تطويرها وصناعة الهوية حتى صناعة المحتوى وادارة المنصات بشكل كامل
                        نعمل على الحصول على أعلى النتائج في أسرع وقت و تطوير الأداء بشكل مستمر من أجل نمو مستمر ومطرد لمؤسستك أو نشاطك
                    </p>
                </div>
            </div>
            <div class="message py-20 px-10 w-full bg-dark relative flex flex-col justify-center text-center ">
                <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                    تواصل الآن من أجل نتائج أسرع وأداء تسويقي احترافي
                </h4>
                <p class="text-white text-links font-body font-light leading-10 mb-5">
                    التسويق الرقمي أصبح عنصرا اساسيا في نجاح أي شركة أو نشاط ، بدون وجود نشاط رقمي حقيقي فأنت لا تواكب العصر
                    سواء عن طريق محركات البحث أو منصات التواصل الاجتماعي فإن حضورك الرقمي أصبح لا غنى عنه
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
