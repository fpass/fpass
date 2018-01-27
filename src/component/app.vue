<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import Vue from 'vue'
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  import 'muse-ui/dist/theme-carbon.css'

  Vue.use(MuseUI)

  export default {}
</script>

<style lang="less">
  html,
  body,
  #app {
    height: 100%;
  }
</style>
