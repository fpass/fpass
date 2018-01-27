import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  locale: navigator.language || 'en',
  messages: ['en', 'zh-CN'].reduce((obj, locale) => (obj[locale] = require(`./${locale}.json`), obj), {})
})
