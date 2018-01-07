import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({app, route, params, store}) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      'en': require('../locales/en.json'),
      'zh-CN': require('../locales/zh-CN.json')
    }
  })
  app.i18n.path = link =>
    app.i18n.locale === app.i18n.fallbackLocale
      ? `/${link}`
      : `/${app.i18n.locale}/${link}`

  const locale = params.lang || (typeof window !== 'undefined' ? navigator.language : '') || 'en'
  store.commit('setLang', locale)
  app.i18n.locale = store.state.locale

  if (route.path === '/') {
    app.router.push(locale)
  }
}
