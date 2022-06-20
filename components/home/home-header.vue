<template>
<div>
  <nav class="py-3 w-full bg-primary" id="nav">
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
            <nuxt-link :to="localePath(`/`)" class="nav-link text-links text-secondary font-semibold font-body" >
            الرئيسية
            </nuxt-link>
          </li>

          <li class="px-5">
            <nuxt-link class="nav-link text-links text-secondary font-semibold font-body  " :to="localePath(`about`)">
              عن كيان
            </nuxt-link>
          </li>

          <li class="px-5">
            <nuxt-link :to="localePath(`contact`)" class="nav-link text-links text-secondary font-semibold font-body">
              المنتجات
            </nuxt-link>
          </li>

          <li class="px-5">
            <nuxt-link :to="localePath(`clients`)" class="nav-link text-links text-secondary font-semibold font-body">
              العملاء
            </nuxt-link>
          </li>

          <li class="px-5">
            <nuxt-link to="/blog" class="nav-link text-links text-secondary font-semibold font-body" >
              المدونة
            </nuxt-link>
          </li>

          <li class="px-5">
            <button @click="whatsapp()" class="nav-link text-links text-secondary font-semibold font-body">
              تواصل معنا
            </button>
          </li>
        </ul>

        <div class="lg:flex md:hidden sm:hidden hidden items-center content-center">
          <button @click="callus()" class="custom-bnt main-btn font-body font-bold ml-6" >
            <img src="/images/call.svg" loading="lazy" :alt="$t(`app.title`)" />

            <span>
              اتصل الان
            </span>
          </button>

          <button @click="whatsapp()" class="custom-bnt main-btn font-body font-bold" >
            <img src="/images/whatsapp.svg" loading="lazy" :alt="$t(`app.title`)" />

            <span>تواصل معنا</span>
          </button>
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
   mounted() {
    this.$nextTick(function(){
      window.addEventListener("scroll", function(){
        var navbar = document.getElementById("nav");
        var nav_classes = navbar.classList;
        if(document.documentElement.scrollTop >= 150) {
          if (nav_classes.contains("navscroll") === false) {
            nav_classes.toggle("navscroll");
          }
        }
        else {
          if (nav_classes.contains("navscroll") === true) {
            nav_classes.toggle("navscroll");
          }
        }
      })
    })
  },
  computed: {
    ...mapState('home', { nav: state => state.nav })
  }
}
</script>

<style lang="scss">
  nav {
    transition: all .3s linear;

    .brand-name {
      transition: all .3s linear;
    }

    &.navscroll {
      box-shadow: 0px 0px 10px rgba($color: #FDD301, $alpha: 0.2);

      .brand-name {
        height: 50px !important;
      }
    }
  }
</style>
