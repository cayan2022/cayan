<template>
  <section class="prices py-16 bg-dark">
    <div class="container">
      <div class="heading py-5 text-center mb-20">
        <h1 class="text-head font-bold text-secondary mb-2">
          أسعار خارج المنافسة
        </h1>

        <p class="opacity-60 text-white text-paragraph font-normal">
          أسعار خارج المنافسة لكي نتيح الفرصة لكل عملائنا امتلاك أكبر نظام لتسويق الخدمات الطبية
        </p>
      </div>

      <div class="price-content bg-primary py-12 rounded-3xl general-pattern">
        <div class="container">
          <div class="grid grid-cols-1 gap-8">
            <template v-for="price in prices">
              <div class="price-data pb-9 border-b border-solid border-semidark flex lg:flex-row md:flex-row flex-col justify-between items-center content-center" :key="price.code">
                <div class="content">
                  <h1 class="font-bold lg:px-10 md:px-10 px-6 text-footerhead text-secondary mb-7 leading-10 relative z-10">
                    {{ price.title }}
                  </h1>
                  <p class="text-white text-links px-10 font-normal">
                    {{ price.desc }}
                  </p>
                </div>

                <div class="price-count">
                  <p class="font-bold lg:m-0 md:m-0 mt-7 px-10 text-footerhead text-secondary leading-10">
                    {{ price.count }}
                  </p>
                </div>
              </div>
            </template>

            <div class="price-data pb-9 flex lg:flex-row md:flex-row flex-col  justify-between items-center content-center">
              <div class="content">
                <h1 class="font-bold px-10 text-footerhead text-secondary leading-10 relative z-10">
                  السعر الإجمالي
                </h1>
              </div>

              <div class="price-count">
                <p class="font-bold before-text relative z-10 px-10 text-footerhead text-secondary leading-10">
                  26500 ر.س
                </p>
              </div>
            </div>

            <div class="total text-center">
              <p class="font-bold relative z-10 px-10 text-footerhead text-secondary leading-10 mb-7">
                13000 ر.س
              </p>

              <p class="text-white text-links px-10 font-normal mb-7">
                مدونه مجانا تساعد على ظهورك على محركات البحث اسرع
              </p>

              <div class="button-content w-full justify-center">
                <nuxt-link :to="localePath(`medical-contact`)" class="custom-bnt m-auto yellow-btn font-body font-bold">
                  <img src="/images/user.svg" loading="lazy" :alt="$t(`app.title`)" />

                  <span>امتلك نسختك الان</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
    .price-content{
        &::after{
            height: 100% !important;
        }
        &::before{
            display: none !important;
        }
        .price-data{
            .content{
                h4{
                    &::after{
                        content: '';
                        position: absolute;
                        width: 20px;
                        height: 20px;
                        background: url('/img/medical/check_circle.svg');
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: center;
                        top: calc(50% - 7px);
                        right: 10px;
                    }
                }
            }
        }
        .before-text{
            &::after{
                content: '';
                position: absolute;
                width: 80%;
                height: 1px;
                background-color: #FDD301;
                top: 50%;
                left: 50%;
                transform: translate(-50% , -50%);
            }
        }
    }
    @media (max-width: 500px) {
        .price-content{
            .price-data{
                .content{
                    h4{
                        &::after{
                            right: 0px;
                        }
                    }
                }
            }
        }
    }
</style>
<script>
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState('home', { prices: state => state.prices })
  }
}
</script>
