<template>
  <div>
    <template v-for="(medical, i) in medicals">
      <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-10" :key="medical.code">
        <div class="image-content mb-32" :class="i%2===0?`order-last`:`order-first`">
          <img :src="`/img/medical/${medical.code}.svg`" loading="lazy" :alt="medical.name" class="w-100">
        </div>

        <div class="content flex flex-col justify-center h-100 mb-32" :class="i%2===0?`order-first`:`order-last`">
          <h1 class="text-serviceHead text-secondary font-bold leading-10">
            {{ medical.name }}
          </h1>

          <p class="text-paragraph text-white font-light my-16 leading-10">
            {{ medical.desc }}
          </p>

          <div class="button-content">
            <button @click="whatsapp()" class="custom-bnt yellow-btn font-body font-bold">
              <img src="/images/user.svg" loading="lazy" :alt="$t(`app.title`)" />

              <span>تحدث الي خبير</span>
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState('home', { medicals: state => state.medicals })
  }
}
</script>
