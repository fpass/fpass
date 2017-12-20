<template>
  <nuxt />
</template>

<script>
  import favicon from '../assets/favicon.png'

  export default {
    head () {
      return {
        link: [
          {rel: 'icon', type: 'image/png', href: favicon}
        ]
      }
    }
  }
</script>

<style lang="less">
  html,
  body,
  #__nuxt {
    height: 100%;
  }
</style>
