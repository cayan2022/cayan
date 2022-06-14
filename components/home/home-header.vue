<template>
<div>
  <nav class="py-3 w-full bg-primary">
    <div class="container mx-auto">
      <div class="w-full flex justify-between items-center">
        <div class="navToggler" :class="{active: nav}" @click="$store.commit(`home/nav`, !nav)">
          <svg width="60" height="60" viewBox="0 0 200 200">
          <g stroke-width="6.5" stroke-linecap="round">
            <path
            d="M72 82.286h28.75"
            fill="#FDD301"
            fill-rule="evenodd"
            stroke="#FDD301"
            />
            <path
            d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
            fill="none"
            stroke="#FDD301"
            />
            <path
            d="M72 125.143h28.75"
            fill="#FDD301"
            fill-rule="evenodd"
            stroke="#FDD301"
            />
            <path
            d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
            fill="none"
            stroke="#FDD301"
            />
            <path
            d="M100.75 82.286h28.75"
            fill="#FDD301"
            fill-rule="evenodd"
            stroke="#FDD301"
            />
            <path
            d="M100.75 125.143h28.75"
            fill="#FDD301"
            fill-rule="evenodd"
            stroke="#FDD301"
            />
          </g>
        </svg>
        </div>

        <nuxt-link :to="localePath(`/`)">
          <img class="brand-name w-12" width="48" height="55" loading="lazy" src="/images/logo.svg" :alt="$t(`app.title`)">
        </nuxt-link>

        <ul class="navbar-nav flex justify-between items-center" :class="{activeNav: nav}">
          <li class="px-5">
            <nuxt-link :to="localePath(`/`)" class="text-links text-secondary font-semibold font-body" >
            الرئيسية
            </nuxt-link>
          </li>

          <li class="px-5">
            <nuxt-link class="text-links text-secondary font-semibold font-body  " :to="localePath(`about`)">
              عن كيان
            </nuxt-link>
          </li>

          <li class="px-5">
            <nuxt-link :to="localePath(`contact`)" class="text-links text-secondary font-semibold font-body">
              المنتجات
            </nuxt-link>
          </li>

          <li class="px-5">
            <nuxt-link :to="localePath(`clients`)" class="text-links text-secondary font-semibold font-body">
              العملاء
            </nuxt-link>
          </li>

          <li class="px-5">
            <nuxt-link to="/blog" class="text-links text-secondary font-semibold font-body" >
              المدونة
            </nuxt-link>
          </li>

          <li class="px-5">
            <nuxt-link :to="localePath(`contact`)" class="text-links text-secondary font-semibold font-body">
              تواصل معنا
            </nuxt-link>
          </li>
        </ul>

        <div class="flex items-center content-center">
          <!-- <nuxt-link :to="switchLocalePath(locale === `ar` ? `en` : `ar`)" class="lang ml-6 w-14 text-primary text-links font-semibold h-14 rounded-full bg-secondary flex justify-center items-center">
          {{ locale === `ar` ? `EN` : `AR` }}
          </nuxt-link> -->

          <nuxt-link :to="localePath(`contact`)" class="custom-bnt main-btn font-body font-bold" >
            <img src="/images/user.svg" loading="lazy" :alt="$t(`app.title`)" />

            <span>تواصل معنا</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
  layout: `home`,
  scrollToTop: true,

  computed: {
    ...mapState('home', { nav: state => state.nav })
  }
}
</script>
