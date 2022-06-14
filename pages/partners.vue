<template>
    <section class="partners py-10 bg-primary  general-pattern">
        <div class="container">
            <div class="heading pb-10 text-center">
                <h4 class="mb-5 text-secondary text-head font-body font-bold">شركاء النجاح</h4>
                <p class="text-white opacity-60 text-paragraph font-body font-normal">انتم الشريك الامثل لنا</p>
            </div>
            <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-7 ">
                <div class="box bg-semidark py-3 px-2">
                    <div class="image-content">
                        <img src="/images/partner_1.png" :alt="$t(`app.title`)">
                    </div>
                    <div class="content text-center py-2">
                        <h6 class="text-secondary text-paragraph font-bold font-body mb-3 capitalize">direct</h6>
                        <p class="text-links leading-8 text-white opacity-75 font-normal font-body ">
                            خبراء صناعة المواقع الإلكترونية والإعلانات وتخطيط
                        </p>
                    </div>
                </div>
                <div class="box bg-semidark py-3 px-2">
                    <div class="image-content">
                        <img src="/images/partner_2.svg" :alt="$t(`app.title`)">
                    </div>
                    <div class="content text-center py-2">
                        <h6 class="text-secondary text-paragraph font-bold font-body mb-3 capitalize">ابتكار لحلول النت</h6>
                        <p class="text-links leading-8 text-white opacity-75 font-normal font-body ">
                            خبراء صناعة المواقع الإلكترونية والإعلانات وتخطيط
                        </p>
                    </div>
                </div>
                 <div class="box bg-semidark py-3 px-2">
                    <div class="image-content">
                        <img src="/images/partner_3.png" :alt="$t(`app.title`)">
                    </div>
                    <div class="content text-center py-2">
                        <h6 class="text-secondary text-paragraph font-bold font-body mb-3 capitalize">المنيو</h6>
                        <p class="text-links leading-8 text-white opacity-75 font-normal font-body ">
                            خبراء صناعة المواقع الإلكترونية والإعلانات وتخطيط
                        </p>
                    </div>
                </div>
                <div class="box bg-semidark py-3 px-2">
                    <div class="image-content">
                        <img src="/images/partner_4.png" :alt="$t(`app.title`)">
                    </div>
                    <div class="content text-center py-2">
                        <h6 class="text-secondary text-paragraph font-bold font-body mb-3 capitalize">بزنس دوت كوم</h6>
                        <p class="text-links leading-8 text-white opacity-75 font-normal font-body ">
                            خبراء صناعة المواقع الإلكترونية والإعلانات وتخطيط
                        </p>
                    </div>
                </div>
                 <div class="box bg-semidark py-3 px-2">
                    <div class="image-content">
                        <img src="/images/partner_5.png" :alt="$t(`app.title`)">
                    </div>
                    <div class="content text-center py-2">
                        <h6 class="text-secondary text-paragraph font-bold font-body mb-3 capitalize">دار اونلاين</h6>
                        <p class="text-links leading-8 text-white opacity-75 font-normal font-body ">
                            خبراء صناعة المواقع الإلكترونية والإعلانات وتخطيط
                        </p>
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

  head() {
    return {title: this.$t(`home.title`)}
  }
}
</script>
