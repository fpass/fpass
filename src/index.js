import Vue from 'vue'
import { i18n } from './i18n'
import router from './router'
import App from './component/app'

// eslint-disable-next-line no-new
new Vue({
  i18n,
  router,
  el: '#app',
  render: h => h(App)
})
