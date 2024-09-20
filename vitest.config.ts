import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  test: {
    silent: true,
    environment: "nuxt",
    environmentOptions: {
      nuxt: {
        overrides: {
          runtimeConfig: {
            public: {
              mdc: {
                components: {
                  map:
                    { h1: "prose-h1" },
                },
              },
            },
          },
        },
      },
    },
  },
});
