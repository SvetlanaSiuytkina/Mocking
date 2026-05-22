import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jestPlugin from "eslint-plugin-jest";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node
      },
    } 
  },

  {
    files: ["/*.test.js"],
    plugins: { jest: jestPlugin },
    extends: ["plugin:jest/recommended"],
    languageOptions: {
      globals: {
        ...jestPlugin.environments.globals.globals,
      },
    },
  },
]);