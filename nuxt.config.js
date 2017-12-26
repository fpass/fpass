const execSync = require('child_process').execSync
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  env: {
    VERSION: isProduction ? JSON.parse(execSync('curl -s https://api.github.com/repos/fpass/fpass/tags').toString())[0].name : ''
  },
  srcDir: 'src/',
  loading: false,
  modules: [
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
