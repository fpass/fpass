import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({app, store, isClient}) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      'en': require('../locales/en.json'),
      'zh-CN': require('../locales/zh-CN.json')
    }
  })
  if (isClient) {
    app.router.beforeEach((to, from, next) => {
      const locale = to.params.lang || to.query.lang || (typeof window !== 'undefined' ? navigator.language : '') || 'en'
      store.commit('setLang', locale)
      app.i18n.locale = store.state.locale
      if (to.name === 'index') {
        return next({path: `/${locale}/`})
      }
      next()
      store.commit('setVisible', true)
    })
  }
}
