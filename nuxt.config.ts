// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/eslint"],
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
});
