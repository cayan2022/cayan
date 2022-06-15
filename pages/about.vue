<template>
<section class="about-us py-20 bg-primary general-pattern">
  <div class="container">
    <div class="heading w-full text-center py-5">
      <h1 class="text-secondary font-body font-bold mb-5 text-head">
        عن كيان
      </h1>

      <p class="text-white opacity-60 font-body font-normal">
        تعرف علينا الآن وازدهر بعملك
      </p>
    </div>

    <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
      <div class="content flex flex-col justify-center h-100">
       <h2 class=" text-secondary font-bold font-body text-head mb-5">
         من نحن
       </h2>

       <p class=" text-links font-body text-white leading-10 text-justify my-5 ">
        كيان .. شركة متخصصة في مجال التسويق الإلكتروني
        والذكاء الاصطناعي خبرة في الأسواق العربية والخليجية
        والسعودية منذ أكتر من سبع سنوات.
        نعتمد على استثمار خبرات متراكمة
        في الحياة الواقعية وتحويلها إلى أدوات تقنية
        فعالة تفهم الواقع وتساعدنا على تطويعه
        وتسخيره فالصعوبة تكمن في المزج بين الواقع
        العملي والتنفيذي التقني.
        شريك الاستراتيجي في النجاح وتوسيع
        أنشطة أعمالك على أكبر نطاق والوصوب
        إلى أكبر فئة من الجمهور المستهدف
       </p>

      <button @click="whatsapp()" class="custom-bnt yellow-btn font-body font-bold">
          <img src="/images/back_button.svg" :alt="$t(`app.title`)" />

          <span>تحدث إلى خبير</span>
        </button>
      </div>

      <div class="image-content">
        <img src="/images/about_us.svg" :alt="$t(`app.title`)">
      </div>

      <div class="image-content">
        <img src="/images/brand_name.svg" :alt="$t(`app.title`)">
      </div>

      <div class="content flex flex-col justify-center h-100">
        <h3 class=" text-secondary font-bold font-body text-head mb-5">
          قصة الشعار
        </h3>

        <p class="text-links font-body text-white leading-10 text-justify my-5">
        كيان بالعربية تعني ” الطبيعة - الخلق -تعني الوجود
        ومن هنا كان اسمنا كشعارنا رمز كيان الشجرة
        وهي أيضاً رمزية للصمود والقوة اسم وشعار كيان
        يمثلان رؤية ورسالة الشركة .
        </p>

        <button @click="whatsapp()" class="custom-bnt yellow-btn font-body font-bold">
          <img src="/images/back_button.svg" :alt="$t(`app.title`)" />

          <span>تحدث إلى خبير</span>
        </button>
        </div>
      </div>
  </div>
</section>
</template>

<script>
  export default {
  layout: `home`,
  scrollToTop: true,

  nuxtI18n: { locales: ['ar'] },

  head() { return { title: this.$t(`home.title`) } }
}
</script>
