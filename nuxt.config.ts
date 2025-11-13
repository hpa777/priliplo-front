// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import * as dotenv from 'dotenv';
dotenv.config();
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  debug: false,
  css: [
    '~/assets/css/global.css'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  /*
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL
    }
  }, */
  modules: ['vue-yandex-maps/nuxt', '@nuxt/eslint', '@nuxtjs/i18n', "@pinia/nuxt"],
  yandexMaps: {
    apikey: process.env.YA_MAP_KEY,
  },  
  i18n: {
    locales: [
      { code: 'ru', name: 'ru-RU', file: 'ru.json' }
    ],
    defaultLocale: 'ru'
  },
  nitro: {
    routeRules: {
      '/media/**' : { proxy: process.env.MEDIA_URL },
      '/api/**' : { proxy: process.env.API_URL }
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      }
    }
  }    
})