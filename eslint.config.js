import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsdocPlugin from 'eslint-plugin-tsdoc';
import globals from 'globals';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  js.configs.recommended,

  // Main configuration for JS/TS files
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.es2022,
        ...globals.node,
        ...globals.mocha,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      tsdoc: tsdocPlugin,
    },
    rules: {
      'no-redeclare': 0,
      'tsdoc/syntax': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },

  // Disable TSDoc checks for config files
  {
    files: ['*.config.js'],
    rules: {
      'tsdoc/syntax': 'off',
    },
  },

  eslintPluginPrettierRecommended,

  // Ignore patterns
  {
    ignores: [
      'lib/**',
      'node_modules/**',
      'coverage/**',
      'third_party/**',
      '.tmp/**',
    ],
  },
];
