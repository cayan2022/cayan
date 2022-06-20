<template>
<section class="contact-us-now bg-primary lg:py-12 md:py-5 sm:py-4 ">
  <div class="container mx-auto">
    <div class="lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-16 hidden">
      <div class="image-content sm:mb-6">
        <img src="/images/conact_us.svg" width="100%" height="100%" loading="lazy" :alt="$t(`app.title`)">
      </div>

      <!-- <div v-if="!done" class="form-content">
        <h4 class="text-head font-bold text-secondary mb-2">
          تحدث الى خبير
        </h4>

        <p class="text-white text-paragraph font-medium opacity-60">
          اذا كان لديك استفسار بخصوص خدمة ما لا تتردد في  التواصل معنا
        </p>

        <div class="form py-10">
          <div class="form-group name w-full h-12 mb-8 relative">
            <input v-model="lead.name" type="text" class="w-full h-12 :focus-within:outline-none :hover:outline-none :focus:outline-none border border-solid px-6 rounded-md bg-primary" :placeholder="$t(`input.name`)">

            <v-error input="name" class="mis-6 mt-2" />
          </div>

          <div class="form-group email w-full mb-8 h-12 relative">
            <input v-model="lead.mobile" type="text" class="w-full h-12 :focus-within:outline-none :hover:outline-none :focus:outline-none border border-solid px-6  rounded-md bg-primary" :placeholder="$t(`input.mobile`)">

            <v-error input="mobile" class="mis-6 mt-2" />
          </div>

          <div class="form-group project w-full mb-10 h-12 relative">
            <select v-model="lead.service_code" class="w-full h-12 :focus-within:outline-none :hover:outline-none :focus:outline-none border border-solid px-14 rounded-md bg-primary">
              <option :value="null">{{ $t(`input.service`) }}</option>

              <option v-for="service in services" :key="service.code" :value="service.code">
                {{ service.name }}
              </option>
            </select>

            <v-error input="service_code" class="mis-6 mt-2" />
          </div>

          <button @click="save" :disabled="isloading" class="custom-bnt yellow-btn font-body font-bold">
            <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

            <span>تحدث إلى خبير</span>
          </button>
        </div>
      </div>

      <div v-else class="flex flex-wrap -mx-3 mb-2">
        <div class="rounded border border-gray-700 p-8">
          <h3 class="text-white font-bold">{{ $t(`input.done`) }}</h3>

          <img src="/img/done.svg" loading="lazy" class="mt-8 mx-auto" width="100" :alt="$t(`input.done`)" />
        </div>
      </div> -->
    </div>

    <div class="py-5 bg-semidark contact-us-links">
      <div class="container mx-auto">
        <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-9 ">
          <div class="lg:col-start-1 lg:col-end-3">
            <div class="data">
              <img class="brand-name m-auto w-12" width="48" height="55" loading="lazy" src="/images/logo.svg" :alt="$t(`app.title`)" />

              <p class="text-links text-white font-light mt-4 text-center leading-10">
                كيان شجرة رقمية تظلك الكترونياً وتجعلك تتذوق من حسِّها الابداعي وتمد جذورها لكل من يحتاجها في المجال الرقمي
              </p>
            </div>
          </div>

          <div class="lg:col-start-3 lg:col-end-4">
            <button @click="whatsapp()" class="box flex w-full flex-col justify-center items-center content-center">
              <div class="icon-content">
                <img src="/images/whatsapp_gold.svg" loading="lazy" :alt="$t(`app.title`)">
              </div>

              <div class="content text-center mt-4">
                <p class="text-secondary text-footerhead font-body font-bold mb-2">
                تواصل معنا
                </p>

                <p class="text-white font-body text-links">
                  0{{ this.number }}
                </p>
              </div>
            </button>
          </div>

          <div class="lg:col-start-4 lg:col-end-5">
            <button @click="mailto()" target="_blank" class="box flex-col">
              <div class="icon-content">
                <img src="/images/message.svg" loading="lazy" :alt="$t(`app.title`)">
              </div>

              <div class="content text-center mt-4">
                <p class="text-secondary text-footerhead font-body font-bold mb-2">
                  راسلنا عبر البريد
                </p>

                <p class="text-white font-body text-links">
                  {{ this.email }}
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { mapState } from 'vuex'
import Cookies from 'js-cookie'

export default {
  data() {
    return {
      done: false,
      lead: {
        source_code: Cookies.get(`_source`),
        gender_id: 1,
        name: null,
        mobile: null,
        mobile_code: 966,
        service_code: null
      }
    }
  },

  computed: {
    // ...mapState('home', { services: state => state.services })
  },

  methods: {
    save() {
      this.$store.dispatch(`home/register`, this.lead)
        .then((ok) => {
          if (ok && ok.done) {
            this.done = true

            this.register()

            this.lead = {
              source_code: null,
              gender_id: 1,
              name: null,
              mobile: null,
              mobile_code: 966,
              service_code: null
            }
          }
        })
    }
  }
}
</script>
