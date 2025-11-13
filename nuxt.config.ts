// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ...(process.env.NODE_ENV === 'development' && {
    // Development-specific configurations
    devtools: { enabled: true },
    // More development-specific settings...
  }),
  debug: false,
  css: [
    '~/assets/css/global.css'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  
  runtimeConfig: {
    public: {
      apiUrl: ''
    }
  }, 
  modules: ['vue-yandex-maps/nuxt', '@nuxt/eslint', '@nuxtjs/i18n', "@pinia/nuxt"],
  yandexMaps: {
    apikey: process.env.NUXT_PUBLIC_YA_MAP_KEY,
  },  
  i18n: {
    locales: [
      { code: 'ru', name: 'ru-RU', file: 'ru.json' }
    ],
    defaultLocale: 'ru'
  },
  nitro: {
    routeRules: {
      '/media/**' : { proxy: process.env.NUXT_MEDIA_URL },
      '/api/**' : { proxy: process.env.NUXT_PUBLIC_API_URL }
    }
  }    
})