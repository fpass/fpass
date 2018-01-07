import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({app, store}) => {
  const i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      'en': require('../locales/en.json'),
      'zh-CN': require('../locales/zh-CN.json')
    }
  })
  i18n.path = link => {
    if (i18n.locale === i18n.fallbackLocale) {
      return `/${link}`
    }
    return `/${i18n.locale}/${link}`
  }
  app.i18n = i18n
}
