// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
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
});
