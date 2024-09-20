// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxt/test-utils/module",
  ],
  routeRules: {
    "/": { prerender: true },
  },
  eslint: {
    config: {
      stylistic: {
        semi: true,
        indent: 2,
        quotes: "double",
        commaDangle: "always-multiline",
      },
    },
  },
  shadcn: {
    componentDir: "./components/ui",
  },
  fonts: {
    provider: "fontsource",
  },
});
