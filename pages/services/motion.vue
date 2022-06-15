<template>
      <section class="service-data general-pattern lg:pt-32 md:pt-14 sm:pt-14 pt-14 pb-10 bg-primary">
        <div class="container">
            <div class="heading mb-5 text-center pb-14 ">
                <h4 class=" font-body font-semibold text-head text-white mb-5">خدمات الموشن جرافيك</h4>
                <ul class="bread-curmb flex justify-center items-center content-center">
                    <li class="px-4">
                        <nuxt-link to="/" class="text-link text-white opacity-60 font-medium font-body">
                            الرئيسية
                        </nuxt-link>
                    </li>

                    <li class="px-4">
                        <span class="text-link text-white opacity-60 font-medium font-body">
                           خدمات الموشن جرافيك
                        </span>
                    </li>
                </ul>
            </div>
            <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10">
                <div class="content h-100 flex flex-col justify-center">
                    <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                         <span>ماهو موشن جرافيك</span> Motion Graphic ؟
                    </h4>
                    <p class="text-white text-links font-body font-light leading-10 text-justify ">
                        الموشن جرافيك "Motion Graphic" هو أحد أنواع الرسوم المتحركة التي تعتمد على الصور والنصوص والأيقونات من أجل صناعة عرض بصري ممتع للمشاهد وإيصال المعلومات اليه بطريقة ممتعة رفقة المؤثرات السينمائية و الصوتية من أجل إيصال رسالتك بسهولة
                    </p>
                    <p class="text-white text-links font-body font-light leading-10 text-justify ">
                       هناك عدة أنواع وطرق للMotion Graphic لكن مهما اختلفت الطرق تظل أجمعها عنوان للموشن جرافيك "Motion Graphic" أحد أحدث الوسائل التسويقية البصرية المتحركة واكثرها ابهارا
                    </p>
                </div>
                <div class="image-content">
                    <img src="/images/motion.svg" :alt="$t(`app.title`)">
                </div>
                <div class="image-content">
                    <img src="/images/video_files.svg" :alt="$t(`app.title`)">
                </div>
                <div class="content  h-100 flex flex-col justify-center">
                    <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                        <span>كيف يمكن لل </span>
                        <span>Motion Graphic </span>
                        <span>مساعدتك تسويقيا؟</span>
                    </h4>
                    <p class="text-white text-links font-body font-light leading-10 text-justify ">
                        المنافسة على أشدها والكل يعمل على الوصول الى العميل من خلال التسويق الالكتروني ٫ لكن يظل كل محاولات الوصول غير مجدية بدون رسالة تسويقية حقيقية ،محتوى مميز مصاغ بحرفة وعرض بصري مذهل قادر على جذب أنظار عميلك منذ الثواني الأولي
                    </p>
                </div>
                <div class="content  h-100 flex flex-col justify-center">
                    <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                        <span>لماذا عليك الاستعانة بال موشن جرافيك</span>
                        <span>"Motion Graphic" ؟</span>
                    </h4>
                    <p class="text-white text-links font-body font-light leading-10 text-justify ">
                        سعره المنخفض مقارنة بالاعلان المصور هو العامل الأبرز للجوء إلى الموشن جرافيك "Motion Graphic" ٫فلن تحتاج إلى الاستعانة بممثلين ومخرجين
                        لذا إن كنت في مراحلك الأولى كرائد أعمال وتبحث عن وسيلة لصناعة فيديو مميز بتكلفة مناسبة فأن الموشن جرافيك "Motion Graphic" هو خيارك الأنسب
                        بالإضافة إلى ان الخيال لا حدود له ، مهما كانت الفكرة بامكانك تنفيذها بسهولة بدون الحاجة الى تحضيرات معقدة من أجل التصوير ٫ مجرد الاستعانة بمؤسسة محترفة مثل "كيان" تضمن لك موشن جرافيك "Motion Graphic" احترافي يساهم في رفع مبيعاتك والوصول إلى أهدافك التسويقية
                    </p>
                </div>
                <div class="image-content">
                    <img src="/images/num_ads.svg" :alt="$t(`app.title`)">
                </div>
            </div>
            <div class="message py-20 px-10 w-full bg-dark relative flex flex-col justify-center text-center ">
                <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                    لا تضع الوقت ...تواصل الآن
                </h4>
                <p class="text-white text-links font-body font-light leading-10 mb-5">
                    مهما كانت رسالتك الدعائية ٫ كيان تضمن لك صناعة موشن جرافيك مبهر وفعال عن طريق دراسة سلوك الشريحة المستهدفة ودراسة اللغة المناسبة لمخاطبته، بالإضافة إلى صناعة سحرنا الخاص من خلال عامل بصري مذهل وسيناريو دقيق ، قادرون على إيصال أعقد البيانات و تحقيق أهدافك التسويقية سواء كانت متعلقة بالمبيعات او زيادة الوعي بعلامتك التجارية
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
