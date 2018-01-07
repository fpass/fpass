export default function ({isHMR, app, store, route, params, redirect}) {
  if (isHMR) {
    return
  }
  const locale = params.lang || route.query.lang || (typeof window !== 'undefined' ? navigator.language : '') || 'en'
  if (route.path === '/') {
    return redirect(`/${locale}`)
  }
  store.commit('setLang', locale)
  app.i18n.locale = store.state.locale
}
