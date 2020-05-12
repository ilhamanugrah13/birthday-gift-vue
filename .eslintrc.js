module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-globals': 'off',
    'func-names': 'off',
    'vue/no-v-html': 'warn',
    'import/extensions': ['off', 'ignorePackages', { vue: 'always', js: 'always' }],
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
  },
};
