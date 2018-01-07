import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({app, isStatic, params, route, store}) => {
  const locale = params.lang || route.query.lang || (isStatic ? navigator.language : '') || 'en'
  app.i18n = new VueI18n({
    locale,
    messages: {
      'en': require('../locales/en.json'),
      'zh-CN': require('../locales/zh-CN.json')
    }
  })
  store.commit('setLang', locale)
}
