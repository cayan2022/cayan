const primary = '#FDD301';

export default {
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    GTM_ID: process.env.GTM_ID
  },

  target: 'static',
  modern: 'client',

  buildModules: [
    '@nuxt/content',
    '@nuxtjs/pwa',
    'nuxt-font-loader',
    // '@nuxtjs/svg-sprite',
    '@nuxtjs/tailwindcss',
    'nuxt-delay-hydration',
  ],

  modules: [
    '@nuxtjs/axios',
    'nuxt-i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/toast',
    '@nuxtjs/gtm',
    ['vue-scrollto/nuxt', { duration: 250 }]
  ],

  plugins: [
    '@/plugins/axios',
    '@/plugins/mixins',
    // '@/plugins/lazy',
    '@/plugins/gtm',
    { src: '@/plugins/swiper', mode: 'client' }
  ],

  css: ['@/assets/sass/app.scss', '@/assets/css/swiper.css'],

  gtm: { id: process.env.GTM_ID },

  tailwindcss: { mode: 'jit' },

  delayHydration: { mode: 'mount' },

  router: { middleware: ['errors', 'nav'] },

  axios: { baseURL: process.env.API_URL },

  toast: { duration: 5000, keepOnHover: true },

  fontLoader: { url: '/fonts/fonts.css' },

  sitemap: {
    hostname: 'https://cayan.co',
    gzip: true,
    i18n: { defaultLocale: 'ar', locales: ['ar', 'en'], routesNameSeparator: '___' }
  },

  i18n: {
    seo: false,
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ar',
    vueI18nLoader: true,
    detectBrowserLanguage: false,
    vueI18n: { fallbackLocale: 'ar' },
    locales: [
      { code: 'ar', name: 'عربي', file: 'ar.js' },
      { code: 'en', name: 'English', file: 'en.js' }
    ]
  },

  loading: { color: primary },

  render: { http2: { push: true } },

  pwa: { manifest: { name: 'Cayan', lang: 'ar', theme_color: primary } },

  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { minutes } = require('reading-time')(document.text)

        document.minutes = parseInt(minutes)
      }
    }
  },

  generate: {
    fallback: true,

    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content('blog').only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },

  build: {
    splitChunks: { layouts: true, pages: true, commons: true },

    extractCSS: true,

    optimizeCSS: true,

    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: { name: 'styles', test: /\.(css|vue)$/, chunks: 'all', enforce: true }
        }
      }
    },

    postcss: {
      preset: {
        features: { "focus-within-pseudo-class": false }
      }
    },

    babel: {
      presets ({ isClient }, preset) {
        if (isClient) preset[1].targets = { chrome: '58' }
        return [preset]
      }
    }
  },

  head: {
    title: 'كيان',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'شركة كيان للحول الرقمية' },
      { hid: 'google', name: 'google', content: 'notranslate' }
    ],
    link: [ { rel: 'icon', type: 'image/png', href: '/icon.png' } ]
  }
}
