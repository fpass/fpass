module.exports = function (moduleOptions) {
  this.options.head = {
    title: 'FINAL PASS',
    meta: [
      {charset: 'utf-8'},
      {'http-equiv': 'x-ua-compatible', content: 'ie=edge'},
      {name: 'description', content: 'final pass website'},
      {name: 'renderer', content: 'webkit'},
      {name: 'apple-mobile-web-app-capable', content: 'yes'},
      {name: 'apple-mobile-web-app-status-bar-style', content: 'black'},
      {name: 'format-detection', content: 'telephone=no,address=no,email=no'},
      {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=0'}
    ],
    link: [
      {rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic'},
      {rel: 'stylesheet', href: '//fonts.googleapis.com/icon?family=Material+Icons'}
    ]
  }
}
