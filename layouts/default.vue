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
