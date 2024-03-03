// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
    typeCheck: true,
  },
  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'ko',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
  quasar: {
    plugins: ['Notify'],
    config: {
      notify: {
        position: 'top-right',
      },
    },
  },
  imports: {},
  app: {
    head: {
      title: 'title 테스트',
      meta: [
        {
          name: 'SEO name 테스트',
          content: 'SEO content 테스트',
        },
      ],
    },
  },
});
