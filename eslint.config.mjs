// @ts-check
import eslintPluginTailwindCSS from "eslint-plugin-tailwindcss";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  plugins: { tailwindcss: eslintPluginTailwindCSS },
  rules: {
    ...eslintPluginTailwindCSS.configs.recommended.rules,
    "prefer-arrow-callback": ["error"],
    "prefer-template": ["error"],
    "sort-imports": ["error", {
      allowSeparatedGroups: true,
    }],
    "vue/block-tag-newline": ["error", {
      maxEmptyLines: 1,
    }],
  },
});
