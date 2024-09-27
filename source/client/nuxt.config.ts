// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  srcDir: "src/",

  nitro: {
    preset: "cloudflare-pages",
  },

  ssr: false,

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  experimental: {
    typedPages: true,
  },

  modules: ["nitro-cloudflare-dev", "@nuxt/eslint", "vuetify-nuxt-module"],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: "./vuetify.config.ts",
  },
});
