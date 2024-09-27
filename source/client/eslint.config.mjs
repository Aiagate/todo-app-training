// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      "vue/v-slot-style":["warn", {
        atComponent: "longform",
        default: "longform",
        named: "longform",
      }],
    },
  },
  {
    files: ["src/layouts/**/*.vue"],
    rules: {
      "vue/multi-word-component-names": ["off"],
    },
  },
  {
    files: ["src/pages/**/*.vue"],
    rules: {
      "vue/multi-word-component-names": ["off"],
    },
  }
);
