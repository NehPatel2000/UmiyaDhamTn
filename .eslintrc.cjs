module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
  },

  env: {
    node: true,
    browser: true,
  },

  extends: [
    'plugin:vue/vue3-essential', // Use Vue 3 Essential rules for error prevention
    'prettier', // Use Prettier for code formatting consistency
  ],

  plugins: [
    'vue', // Required for linting .vue files
  ],

  globals: {
    ga: 'readonly', // Example global variables
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly',
  },

  rules: {
    'prefer-promise-reject-errors': 'off', // Disable this rule

    // Allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};

