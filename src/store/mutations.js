export default {
  setLang (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  setVisible (state, visible) {
    state.visible = visible
  }
}
