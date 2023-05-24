// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    runtimeConfig: {
        "app": {
          "baseURL": "/betatube",
          "buildAssetsDir": "/betatube/_nuxt/",
        }
      }
})
