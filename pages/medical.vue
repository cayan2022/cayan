<template>
  <div class="medical pt-32 bg-primary general-pattern">
    <div class="container">
      <div class="heading text-center mb-5 w-full">
          <h1 class="text-secondary lg:text-head md:text-footerhead sm:text-paragraph mb-9 leading-8 font-bold">
            نظام كيان ,, خيارك الأمثل
          </h1>

          <p class="text-white lg:text-links md:text-links sm:text-links mb-9 font-semibold leading-8">
            كيان ,, النظام الأمثل لإدارة العملاء والتسويق للمراكز الطبية
          </p>

          <p class="text-white opacity-60 text-links leading-8 font-medium mb-9">
            النطاق الجغرافي حول المركز الطبي يعيش فيه عدد ال تتوقعه من العملاء ، أنت فقط ال تصل إليهم بكفاءة فيما يفعل ذلك منافسين لك
          </p>

          <nuxt-link :to="localePath(`medical-contact`)" class="custom-bnt m-auto yellow-btn font-body font-bold">
            <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

            <span>تحدث إلى خبير</span>
          </nuxt-link>
      </div>

      <medical-services  class="pt-24"/>
    </div>

    <section class="py-12 bg-secondary cayan-say">
      <div class="container mx-auto">
        <div class="content w-100 text-center flex flex-col justify-center items-center content-center">
          <img class="brand-name" src="/images/cayanlogo.svg" width="86" height="100" loading="lazy" :alt="$t(`app.title`)">

          <p class=" text-primary lg:w-4/6	md:w-3/6	sm:w-full mx-auto text-paragraph mt-6 leading-10">
            الاستراتيجية التسويقية المتكاملة وإدارة الاستهداف والتفاعل هو ما يحقق النجاح والانتشار خصوصًا في المجال الطبي
          </p>
        </div>
      </div>
    </section>

    <section class="philosophy lg:py-9 md:py-5 py-4">
      <div class="container mx-auto">
        <div class="heading py-5 text-center lg:mb-20 md:mb-20 mb-10">
          <h1 class="text-head font-bold text-secondary">
            أداء يتخطى الحدود
          </h1>
        </div>

        <div class="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-6">
          <div class="content py-16 relative z-50 overflow-hidden  lg:px-32 md:px-20 sm:px-8 bg-dark">
            <p class="text-white font-medium leading-9 text-paragraph text-center ">
              يطبق نظام ابتكار معايير التصميم الاحترافية لإمتلاك كل ميزة تنافسية ممكنة ما يمكننا من إدارة حملات فعالة ومؤثرة ويمنحنا القدرة على تحسين الأداء دوريًا للحفاظ على موقع الصدارة
            </p>

            <img class="brid-pattern" src="/images/brid.svg" loading="lazy" :alt="$t(`app.title`)">
          </div>
        </div>
        </div>
    </section>

<!--        <medical-prices />-->

    <medical-contact />

    <section class="clients py-10 bg-primary">
      <div class="container">
        <div class="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-6">
          <div class="box" v-for="(client, i) in clients" :key="i">
            <div class="image-content">
              <img :src="`/images/${client.img}.png`" :alt="$t(`app.title`)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

export default {
  layout: `home`,
  scrollToTop: true,

  components: {
    medicalServices: () => import(`@/components/home/medical-services`),
    medicalPrices: () => import(`@/components/home/medical-prices`),
    medicalContact: () => import(`@/components/home/medical-contact`),
  },

  data() {
    return {
      clients: [
        {
          img: 'client_7',
        }, {
          img: 'client_22'
        }, {
          img: 'client_11'
        }, {
          img: 'alridwan'
        }
      ]
    }
  },

  nuxtI18n: { locales: ['ar'] },

  head() { return { title: this.$t(`home.title`) } }
}
</script>
