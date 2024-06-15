import js from '@eslint/js';
import globals from 'globals';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    plugins: {
      'react-hooks': eslintReactHooks,
      react: eslintReact,
      'react-refresh': eslintReactRefresh,
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ['dist', 'node_modules', 'coverage', 'eslint.config.js'],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    rules: {
      ...eslintConfigPrettier.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto'
        }
      ],
      'react/prop-types': [0],
      'indent': ['error', 'tab']
    },
    languageOptions: { sourceType: "commonjs" }
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021
      },
      parserOptions: eslintReact.configs.recommended.parserOptions
    }
  },
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
];