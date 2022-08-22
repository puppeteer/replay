module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: ['eslint:recommended', 'google', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
  rules: {
    'require-jsdoc': 0,
    'no-redeclare': 0,
    'valid-jsdoc': 0, // Figure jsdoc once we look into documentation.
    'tsdoc/syntax': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
  ignorePatterns: ['third_party/**/*'],
};
