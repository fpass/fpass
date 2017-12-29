module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  plugins: [
    'html'
  ],
  rules: {
    'no-new': 0,
    'no-return-assign': 0
  },
  globals: {}
}
