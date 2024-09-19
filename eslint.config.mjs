// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
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
