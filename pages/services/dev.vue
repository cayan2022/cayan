<template>
    <section class="service-data general-pattern lg:pt-32 md:pt-14 sm:pt-14 pt-14 pb-10 bg-primary">
        <div class="container">
            <div class="heading mb-5 text-center pb-14 ">
                <h4 class=" font-body font-semibold text-head text-white mb-5">بناء المواقع والتطبيقات</h4>
                <ul class="bread-curmb flex justify-center items-center content-center">
                    <li class="px-4">
                        <nuxt-link to="/" class="text-link text-white opacity-60 font-medium font-body">
                            الرئيسية
                        </nuxt-link>
                    </li>

                    <li class="px-4">
                        <span class="text-link text-white opacity-60 font-medium font-body">
                            بناء المواقع والتطبيقات
                        </span>
                    </li>
                </ul>
            </div>
            <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10">
                <div class="content h-100 flex flex-col justify-center">
                    <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                        شركة بدون موقع أو تطبيق خاص بها أشبه
                        بأسرة بدون بيت
                    </h4>
                    <p class="text-white text-links font-body font-light leading-10 text-justify ">
                        المواقع والتطبيقات أحد أهم العناصر الأساسية في عصرنا لأي رائد أعمال أو شركة ،منصتك الخاصة أحد أهم ادواتك في التسويق الالكتروني وأكثرها فاعلية في الوصول إلى العملاء لتوصيل رسالتك التسويقية وإيجاد منصة ثابتة لسهولة التواصل
                    </p>
                </div>
                <div class="image-content">
                    <img src="/images/web.svg" :alt="$t(`app.title`)">
                </div>
                <div class="image-content">
                    <img src="/images/content_creator.svg" :alt="$t(`app.title`)">
                </div>
                <div class="content  h-100 flex flex-col justify-center">
                    <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                        بناء موقع  " Website "
                    </h4>
                    <p class="text-white text-links font-body font-light leading-10 text-justify ">
                        نقوم بتصميم موقعك بناء على خطة استراتيجية قائمة على نشاط وموقع شركتك ، كما نضمن لعميلك تجربة مميزة تصحبه من بداية التصفح حتي الخطوة النهائية من تواصل او اتمام عملية الشراء
                    </p>
                </div>
                <div class="content  h-100 flex flex-col justify-center">
                    <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                        بناء المواقع للمتاجر الالكترونية
                    </h4>
                    <p class="text-white text-links font-body font-light leading-10 text-justify ">
                        مع ازدياد حجم التجارة الإلكترونية في عالمنا العربي تزداد الحاجة لصناعة مواقع تناسب حجم ونشاط كل متجر إلكتروني بشكل مدروس ومخطط له من أجل ضمان الحفاظ على اهتمام العميل داخل المaaوقع ومساعدته على اتخاذ قرار الشراء
                        نراعي أن يصادق الموقع مع مواقع البحث من أجل ضمان زيارات مستمرة ومتزايدة من العملاء بلا انقطاع
                    </p>
                </div>
                <div class="image-content">
                    <img src="/images/online_shopping.svg" :alt="$t(`app.title`)">
                </div>
                <div class="image-content">
                    <img src="/images/app_wireframe.svg" :alt="$t(`app.title`)">
                </div>
                <div class="content  h-100 flex flex-col justify-center">
                    <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                        تصميم التطبيقات
                    </h4>
                    <p class="text-white text-links font-body font-light leading-10 text-justify ">
                        نساعدك على تصميم التطبيق الخاص بك سواء كان ذا طبيعية تعليمية أو طبية أو تجارية بشكل أحترافي ومعايير عالية تضمن لك تجربة مميزة لعميلك وأسعار تنافسية
                    </p>
                </div>
            </div>
            <div class="message py-20 px-10 w-full bg-dark relative flex flex-col justify-center text-center ">
                <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                    صمم موقعك مع "كيان"...الآن
                </h4>
                <p class="text-white text-links font-body font-light leading-10 mb-5">
                    نهتم بتصميم المواقع والتطبيقات بشكل يناسب لكل شركة تبعا لنشاطها وسلوك عملائها ومتوافق مع كل الأجهزة الشخصية الذكية ٫ نفتخر في "كيان بفريقنا من المبرمجين ومصممي المواقع القادرون على خدمتك بسلاسة وفاعلية من أجل حلول ذكية متطورة وفق معايير على أعلي مستوي
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
