<template>
    <section class="service-data general-pattern py-10 bg-primary">
        <div class="container">
            <div class="heading mb-5 text-center pb-14 ">
                <h4 class=" font-body font-semibold text-head text-white mb-5"> ابتكار الهوية والتصميم </h4>
                <ul class="bread-curmb flex justify-center items-center content-center">
                    <li class="px-4">
                        <nuxt-link to="/" class="text-link text-white opacity-60 font-medium font-body">
                            الرئيسية
                        </nuxt-link>
                    </li>

                    <li class="px-4">
                        <span class="text-link text-white opacity-60 font-medium font-body">
                            ابتكار الهوية والتصميم
                        </span>
                    </li>
                </ul>
            </div>
            <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10">
                <div class="content h-100 flex flex-col justify-center">
                    <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                        نبتكر لك الهوية البصرية التي تضمن لك تميزك
                        وتعكس تفردك
                    </h4>
                    <p class="text-white text-links font-body font-light leading-10 text-justify  mb-5 ">
                        مهما كان مجالك ندرس جميع الجوانب المتعلقة بنشاطك ونقدم لك رؤية متكاملة عن هويتك البصرية بدء من الألوان والشعار والخطوط حتى أدق التفاصيل من أجل ضمان واجهة بصرية تليق بك وبشخصية مؤسستك
                    </p>
                </div>
                <div class="image-content">
                    <img src="/images/upload_image.svg" :alt="$t(`app.title`)">
                </div>
                <div class="image-content">
                    <img src="/images/logo_design.svg" :alt="$t(`app.title`)">
                </div>
                <div class="content h-100 flex flex-col justify-center">
                    <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                        لماذا عليك صناعة هويتك البصرية الخاصة ؟
                    </h4>
                    <p class="text-white text-links font-body font-light leading-10 text-justify  mb-5 ">
                        تلجأ الشركات إلى صناعة هوية بصرية خاصة من أجل خلق علاقة مميزة مع العميل والتميز وسط المنافسة وزيادة الثقة والمصداقية بينك وبين عملائك
                    </p>
                </div>
                <div class="content h-100 flex flex-col justify-center">
                    <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                        كيف نصنع هويتك المميزة ؟
                    </h4>
                    <p class="text-white text-links font-body font-light leading-10 text-justify  mb-5 ">
                        يقوم فنانينا بالتعاون مع خبراء التسويق بدراسة نشاطك وتحليل منافسيك من أجل ضمان تميزك ، ثم نضع الخطوط الأساسية لشخصيتك الاعتبارية بدء من الألوان والعناصر والخطوط في تناسق مذهل يأسر عيون عملائك ويضعك دوما في الذاكرة
                        بعد عملية إبداعية مطولة نستقر معا على التصميم الأنسب لشعارك قبل أن نشرع في تصميم كل احتياجاتك من تصاميم ومطبوعات ،نصمم لك عناصر الهوية كاملة (الشعار , كروت شخصية , الفولدر , الورق الرسمي , الأظرف بمختلف المقاسات , رول أب , بطاقة العمل , فلاير , بروشور , البروفايل , أكياس ورقية , زي الموظفين , سندات , اختام , ورق ملاحظات , بانرات اعلانية )
                    </p>
                </div>
                <div class="image-content">
                    <img src="/images/note.svg" :alt="$t(`app.title`)">
                </div>
            </div>
            <div class="message py-20 px-10 w-full bg-dark relative flex flex-col justify-center text-center ">
                <h4 class=" text-secondary text-footerhead font-body font-semibold mb-5">
                    "كيان" تضمن لك هوية مميزة بأيدي خبراء مميزين
                </h4>
                <p class="text-white text-links font-body font-light leading-10 mb-5">
                    ندرك أن الهوية البصرية أحد عوامل الصورة الذهنية التي تعزز من فرصك في الظهور وفرض وجودك
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
