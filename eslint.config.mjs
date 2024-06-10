import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        ecmaVersion: 12,
        sourceType: "module"
      },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
  }
];
