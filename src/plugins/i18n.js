import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({app, isStatic, params, route, store}) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    messages: {
      'en': require('../locales/en.json'),
      'zh-CN': require('../locales/zh-CN.json')
    }
  })
  const locale = params.lang || route.query.lang || (isStatic ? navigator.language : '') || 'en'
  store.commit('setLang', locale)
  app.i18n.locale = store.state.locale
}
