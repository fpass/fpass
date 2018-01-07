export default ({app, params, store, route, redirect}) => {
  const locale = params.lang || 'en'
  if (!store.state.locales.includes(locale)) {
    return redirect('/')
  }
  store.commit('setLang', locale)
  app.i18n.locale = store.state.locale
  if (locale === 'en' && route.fullPath.indexOf('/en') === 0) {
    return redirect(route.fullPath.replace(/^\/en/, '/'))
  }
}
