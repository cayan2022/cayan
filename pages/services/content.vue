<template>
      <section class="service-data general-pattern lg:pt-32 md:pt-14 sm:pt-14 pt-14 pb-10 bg-primary">
        <div class="container">
            <div class="heading mb-5 text-center pb-14 ">
                <h4 class=" font-body font-semibold text-head text-white mb-5">صياغة وتحرير المحتوى</h4>
                <ul class="bread-curmb flex justify-center items-center content-center">
                    <li class="px-4">
                        <nuxt-link to="/" class="text-link text-white opacity-60 font-medium font-body">
                            الرئيسية
                        </nuxt-link>
                    </li>

                    <li class="px-4">
                        <span class="text-link text-white opacity-60 font-medium font-body">
                           صياغة وتحرير المحتوى
                        </span>
                    </li>
                </ul>
            </div>
            <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10">
                <div class="content h-100 flex flex-col justify-center">
                    <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                         المحتوى هو الملك
                    </h4>
                    <p class="text-white text-links font-body font-light leading-10 text-justify ">
                       مهما كان مجالك ندرس جميع الجوانب المتعلقة بنشاطك ونقدم لك رؤية متكاملة عن هويتك البصرية بدء من الألوان والشعار والخطوط حتى أدق التفاصيل من أجل ضمان واجهة بصرية تليق بك وبشخصية مؤسستك
                    </p>
                </div>
                <div class="image-content">
                    <img src="/images/content_data.svg" :alt="$t(`app.title`)">
                </div>
                <div class="image-content">
                    <img src="/images/information_tab.svg" :alt="$t(`app.title`)">
                </div>
                <div class="content  h-100 flex flex-col justify-center">
                    <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                            صناعة وادارة المحتوى
                    </h4>
                    <p class="text-white text-links font-body font-light leading-10 text-justify ">
                         صناعة المحتوى عملية تحتاج الي ايدي محترفة وعقول مبهرة قادرة على صناعة الفارق ، في "كيان" صناعة المحتوى تتم وفق أسس علمية بأنامل فنانين متمرسين . ندرك كيف نخيط الحكايا ونصنع عالما يطفو على الهواء ونبحر بخيال المتابعين في عالم من المتعة لكننا ندرك كذلك كيف نصنع النتائج ونصيغ الأرقام حتى يتحول كل ذلك إلى أثر ملموس على نشاط مؤسستك
                    </p>
                    <p class="text-white text-links font-body font-light leading-10 text-justify ">
                         لا نستهدف البيع السريع فقط بل بناء علاقة طويلة الأمد مع متابعيك عن طريق تقديم محتوي غني ،مفيد وممتع
                    </p>
                    <p class="text-white text-links font-body font-light leading-10 text-justify ">
                         نعمل بشكل استراتيجي من أجل حضور تسويقي قوي ومميز عبر منصات التواصل الاجتماعي
                    </p>
                     <p class="text-white text-links font-body font-light leading-10 text-justify ">
                           نعرف كيفية صناعة التريند واللحاق به ونجيد إدارة المحتوي عبر كل المنصات بشكل يضمن لك ظهورك عبر محركات البحث من أجل انتشار على أوسع نطاق
                    </p>
                </div>
            </div>
            <div class="message py-20 px-10 w-full bg-dark relative flex flex-col justify-center text-center ">
                <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                    تواصل الأن لطلب خدمة صياغة وتحرير المحتوى
                </h4>
                <p class="text-white text-links font-body font-light leading-10 mb-5">
                   مهما كان شكل المحتوى مكتوب او مرئي ، نمتلك فريق من الخبراء قادر على إحداث الفارق و صناعة محتوى من أجل البيع
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
