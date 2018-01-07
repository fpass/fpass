export default {
  setLang (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
