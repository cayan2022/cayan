<template>
<footer class="w-full pt-12 pb-10 bg-dark">
  <div class="container mx-auto">
    <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-10">
      <div class="content">
        <nuxt-link :to="localePath(`/`)">
          <img class="brand-name" src="/images/logo.svg" width="86" height="100" loading="lazy" :alt="$t(`app.title`)">
        </nuxt-link>

        <p class=" text-links text-white font-normal leading-8 my-8">
          خبراء صناعة المواقع الإلكترونية والإعلانات وتخطيط التسويق الرقمي، ونخبة من الفنانين والمصممين، كل ذلك يندمج في كيان واحد
        </p>

        <ul class="social-media">
          <li>
            <a href="https://www.facebook.com/Cayan.io" target="_blank" rel="noopener">
              <img src="/images/facebook.svg" loading="lazy" :alt="$t(`app.title`)">
            </a>
          </li>

          <li>
            <a href="https://twitter.com/Cayan_Co" target="_blank" rel="noopener">
              <img src="/images/twitter.svg" loading="lazy" :alt="$t(`app.title`)">
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/cayan.io" target="_blank" rel="noopener">
              <img src="/images/instagram.svg" loading="lazy" :alt="$t(`app.title`)">
            </a>
          </li>

          <li>
            <a href="https://www.youtube.com/channel/UCOADgs8F3PuU7TGq6dGx5NA" rel="noopener">
              <img src="/images/youtube.svg" loading="lazy" :alt="$t(`app.title`)">
            </a>
          </li>
        </ul>
      </div>

      <div class="content-data">
        <h1 class="text-secondary text-footerhead mb-6 font-body font-bold">
          خدماتنا
        </h1>

        <p class="text-white opacity-60 mb-6 text-links font-body font-normal">
          افضل الخدمات من تصميم وبرمجة
        </p>

        <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:gap-10 sm:gap-0">
          <ul>
            <li class="list-link">
              <nuxt-link :to="localePath(`services-dev`)" class="link-content text-center font-body font-normal">
                المواقع والتطبيقات
              </nuxt-link>
            </li>

            <li class="list-link">
              <nuxt-link :to="localePath(`services-branding`)" class="link-content text-center font-body font-normal">
                ابتكار الهوية والتصميم
              </nuxt-link>
            </li>

            <li class="list-link">
              <nuxt-link :to="localePath(`services-marketing`)" class="link-content text-center font-body font-normal">
                إدارة التسويق الرقمي
              </nuxt-link>
            </li>
          </ul>

          <ul>
            <li class="list-link">
              <nuxt-link :to="localePath(`services-ads`)" class="link-content text-center font-body font-normal">
                تخطيط الإعلانات الرقمية
              </nuxt-link>
            </li>

            <li class="list-link">
              <nuxt-link :to="localePath(`services-content`)" class="link-content text-center font-body font-normal">
                صياغة وتحرير المحتوى
              </nuxt-link>
            </li>

            <li class="list-link">
              <nuxt-link :to="localePath(`services-motion`)" class="link-content text-center font-body font-normal">
                إنتاج الموشن جرافيك
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="content-data">
        <h1 class="text-secondary text-footerhead mb-6  font-body font-bold">
          روابط هامة
        </h1>

        <p class="text-white opacity-60 mb-6  font-body text-links font-normal">
          مجموعة من الروابط الهامة في كيان
        </p>

        <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:gap-10 sm:gap-0">
          <ul class="tree">
            <li class="list-link">
              <nuxt-link :to="localePath(`projects`)" class="link-content font-body font-normal">
                معرض الأعمال
              </nuxt-link>
            </li>

            <li class="list-link">
              <a href="/pdf/cayan_profile.pdf" target="_blank" class="link-content font-body font-normal">
                الملف التعريفي
              </a>
            </li>

            <li class="list-link">
              <nuxt-link :to="localePath(`contact`)" class="link-content font-body font-normal">
                منتجاتنا
              </nuxt-link>
            </li>

            <li class="list-link">
              <nuxt-link :to="localePath(`support`)" class="link-content font-body font-normal">
                الدعم الفني
              </nuxt-link>
            </li>

            <li class="list-link">
              <nuxt-link :to="localePath(`partners`)" class="link-content font-body font-normal">
                شركاء النجاح
              </nuxt-link>
            </li>
          </ul>
          <ul class="tree">
            <li class="list-link">
              <nuxt-link to="/blog" class="link-content font-body font-normal">
                مدونة كيان
              </nuxt-link>
            </li>

            <li class="list-link">
              <nuxt-link :to="localePath(`contact`)" class="link-content font-body font-normal">
                العرض الفني
              </nuxt-link>
            </li>

            <li class="list-link">
              <nuxt-link :to="localePath(`contact`)" class="link-content font-body font-normal">
                التواصل معنا
              </nuxt-link>
            </li>

             <li class="list-link">
              <nuxt-link :to="localePath(`team`)" class="link-content font-body font-normal">
                فريق العمل
              </nuxt-link>
            </li>

            <li class="list-link">
              <nuxt-link :to="localePath(`contact`)" class="link-content font-body font-normal">
                مختارات تقنية
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
</template>
