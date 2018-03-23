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

  .mu-popover {
    overflow: auto;
  }

  .mu-dialog {
    max-width: 520px;
  }

  .mu-dialog-title {
    font-size: 18px;
  }

  .mu-dialog-body {
    word-break: break-all;
    word-wrap: break-word;
  }
</style>
