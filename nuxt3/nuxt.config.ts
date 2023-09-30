export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/strapi",
    "@unlok-co/nuxt-stripe",
    "nuxt-icons",
    "@nuxtjs/i18n",
    '@nuxtjs/device',
  ],

  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});
