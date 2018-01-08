module.exports = {
  srcDir: 'src/',
  loading: false,
  plugins: [
    {src: '~/plugins/fastclick', ssr: false},
    {src: '~/plugins/muse-ui'},
    {src: '~/plugins/i18n'}
  ],
  generate: {
    routes: [
      '/',
      '/en',
      '/zh-CN'
    ]
  },
  build: {
    extractCSS: true,
    publicPath: '/',
    vendor: [
      'vue-i18n',
      'fastclick',
      'muse-ui'
    ]
  }
}
