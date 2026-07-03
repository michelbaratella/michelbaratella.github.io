// @ts-check
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig({
  // Tell ESLint which files to check
  files: ["**/*.{js,ts,tsx}"],

  // Apply recommended JavaScript and TypeScript rules
  extends: [js.configs.recommended, ...tseslint.configs.recommended],

  // Global folders you want ESLint to completely skip
  ignores: ["node_modules/", "dist/", "build/"],

  // Custom rule overrides go here
  rules: {
    // Example: change a rule severity or turn one off
    // '@typescript-eslint/no-explicit-any': 'warn',
  },
});
