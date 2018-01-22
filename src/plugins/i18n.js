import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({app, store}) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: store.state.locales[0],
    messages: store.state.locales.reduce((obj, locale) => (obj[locale] = require(`../locales/${locale}.json`), obj), {})
  })
  if (process.client) {
    app.router.beforeEach((to, from, next) => {
      const locale = to.params.lang || to.query.lang || (typeof window !== 'undefined' ? navigator.language : '') || 'en'
      store.commit('setLang', locale)
      app.i18n.locale = store.state.locale
      if (to.name === 'index') {
        return app.router.replace({path: `/${locale}/`})
      }
      next()
      store.commit('setVisible', true)
    })
  }
}
