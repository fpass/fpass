module.exports = {
  srcDir: 'src/',
  loading: false,
  modules: [
    '~/modules/head',
    '~/modules/pwa'
  ],
  plugins: [
    {src: '~/plugins/pwa', ssr: false}
  ],
  build: {
    extractCSS: false,
    publicPath: '/'
  }
}
