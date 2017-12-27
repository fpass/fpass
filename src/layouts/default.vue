<template>
  <nuxt />
</template>

<script>
  import favicon from '../assets/favicon.png'

  export default {
    head () {
      return {
        title: 'FINAL PASS',
        meta: [
          {charset: 'utf-8'},
          {'http-equiv': 'x-ua-compatible', content: 'ie=edge'},
          {name: 'description', content: 'only need remember one password can securely manage all website passwords'},
          {name: 'renderer', content: 'webkit'},
          {name: 'apple-mobile-web-app-capable', content: 'yes'},
          {name: 'apple-mobile-web-app-status-bar-style', content: 'black'},
          {name: 'format-detection', content: 'telephone=no,address=no,email=no'},
          {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=0'}
        ],
        link: [
          {rel: 'icon', type: 'image/png', href: favicon}
        ]
      }
    }
  }
</script>
