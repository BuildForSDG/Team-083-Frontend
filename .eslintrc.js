module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'plugin:react/recommended', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '16.9.0'
    }
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],
    'linebreak-style': ['error', 'windows']
  }
};
