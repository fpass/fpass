import Vue from 'vue'
import FastClick from 'fastclick'
import './i18n'
import router from './router'
import store from './store'
import App from './component/app'

FastClick.attach(document.body)

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
