export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/strapi",
    "@unlok-co/nuxt-stripe",
    "nuxt-icons",
    "@nuxtjs/i18n",
  ],

  i18n: {
    vueI18n: "./i18n.config.ts",
  },

  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
});
