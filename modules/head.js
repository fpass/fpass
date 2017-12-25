const execSync = require('child_process').execSync
const version = JSON.parse(execSync('curl -s https://api.github.com/repos/fpass/fpass/tags').toString())[0].name

module.exports = function (moduleOptions) {
  this.options.head = {
    title: `FINAL PASS ${version}`,
    meta: [
      {charset: 'utf-8'},
      {'http-equiv': 'x-ua-compatible', content: 'ie=edge'},
      {name: 'description', content: 'final pass website'},
      {name: 'renderer', content: 'webkit'},
      {name: 'apple-mobile-web-app-capable', content: 'yes'},
      {name: 'apple-mobile-web-app-status-bar-style', content: 'black'},
      {name: 'format-detection', content: 'telephone=no,address=no,email=no'},
      {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=0'}
    ]
  }
}
