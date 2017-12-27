const execSync = require('child_process').execSync
const isProduction = process.env.NODE_ENV === 'production'

let RULES = [{name: '测试1', domain: 'test1.com', length: 16}, {name: '测试2', domain: 'test2.com', length: 8}]
let VERSION = ''
if (isProduction) {
  RULES = eval(JSON.parse(execSync('curl -s https://api.github.com/repos/fpass/fpass/issues/3')).body.match(/```js([\s\S]*?)```/).pop())
  VERSION = JSON.parse(execSync('curl -s https://api.github.com/repos/fpass/fpass/tags'))[0].name
}

module.exports = {
  env: {
    RULES,
    VERSION
  },
  srcDir: 'src/',
  loading: false,
  modules: [
    '~/modules/offline'
  ],
  plugins: [
    {src: '~/plugins/offline', ssr: false},
    {src: '~/plugins/fastclick', ssr: false},
    {src: '~/plugins/muse-ui'}
  ],
  build: {
    extractCSS: true,
    publicPath: '/'
  }
}
