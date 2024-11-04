import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'node_modules/',
      'dist/',
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-multi-spaces': 'error', // 禁止多个空格
      'indent': ['error', 2], // 缩进必须是2个空格
      'no-trailing-spaces': 'error', // 禁止行尾空格
      'space-infix-ops': 'error', // 操作符周围要有空格
      'comma-spacing': ['error', { 'before': false, 'after': true }], // 逗号后面要有空格
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
