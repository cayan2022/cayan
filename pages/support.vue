<template>
    <section class="tech-support general-pattern lg:pt-32 md:pt-14 sm:pt-14 pt-14 pb-10 bg-primary">
        <div class="container">
            <div class="text-center pb-10 ">
                <h4 class="text-secondary font-bold font-body text-head mb-5 ">
                    الدعم الفني
                </h4>
                <p class="text-white opacity-60  font-medium font-body text-links">اذا كان لديك أي استفسار فلا تتردد بالتواصل معنا الان</p>
            </div>
            <div class="grid lg:grid-cols-2 pb-16 md:grid-cols-2 sm:grid-cols-1 gap-10">
                <div class="image-content sm:mb-6 ">
                    <img src="/images/contact_info.svg" :alt="$t(`app.title`)">
                </div>
                <div class="flex flex-col justify-center">
                    <h4 class="text-secondary  font-body text-paragraph mb-5 ">نحن هنا لمساعدتك</h4>
                    <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                        <a href="mailto:info@cayan.co" class="box">
                            <div class="image-content">
                                <img src="/images/message.svg" :alt="$t(`app.title`)">
                            </div>
                            <div class="content text-center pt-5">
                                <h4 class="text-secondary font-body text-links mb-4 ">تواصل معنا بشكل مباشر</h4>
                                <span class="text-white text-links font-body opacity-70 ">info@cayan.co</span>
                            </div>
                        </a>
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

  nuxtI18n: { locales: ['ar'] },

  head() { return { title: this.$t(`home.title`) } }
}
</script>
