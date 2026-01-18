import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsdocPlugin from 'eslint-plugin-tsdoc';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Get the extended configs and filter out deprecated rules
const googleConfig = compat.extends('eslint-config-google');
const prettierConfig = compat.extends('plugin:prettier/recommended');

// Filter out deprecated rules that don't exist in ESLint v9
const filterDeprecatedRules = (config) => {
  if (!config.rules) return config;
  const filteredRules = { ...config.rules };
  // Remove deprecated rules that were removed in ESLint v9
  delete filteredRules['valid-jsdoc'];
  delete filteredRules['require-jsdoc'];
  return { ...config, rules: filteredRules };
};

export default [
  // Apply recommended configs
  js.configs.recommended,
  ...googleConfig.map(filterDeprecatedRules),
  ...prettierConfig.map(filterDeprecatedRules),

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

  // Configuration for CommonJS files (.cjs)
  {
    files: ['**/*.cjs'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'script',
      },
    },
    rules: {
      'no-unused-vars': 'off',
    },
  },

  // Ignore patterns
  {
    ignores: ['lib/**', 'node_modules/**', 'coverage/**', 'third_party/**'],
  },
];
