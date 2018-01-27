import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const locales = ['en', 'zh-CN']

export default new VueI18n({
  locale: locales.indexOf(navigator.language) === -1 ? 'en' : navigator.language,
  messages: locales.reduce((obj, locale) => (obj[locale] = require(`./${locale}.json`), obj), {})
})
