export default ({isHMR, app, store, route, params, error, redirect}) => {
  if (isHMR) return

  const locale = params.lang || 'en'
  if (!store.state.locales.includes(locale)) {
    return redirect('/')
  }

  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale

  if (locale === 'en' && route.fullPath.indexOf('/en') === 0) {
    return redirect(route.fullPath.replace(/^\/en/, '/'))
  }
}
