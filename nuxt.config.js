module.exports = {
  loading: false,
  modules: [
    '~/modules/head',
    '~/modules/pwa'
  ],
  plugins: [
    {src: '~/plugins/pwa', ssr: false},
    {src: '~/plugins/fastclick', ssr: false},
    {src: '~/plugins/muse-ui'}
  ],
  build: {
    extractCSS: true,
    publicPath: '/'
  }
}
