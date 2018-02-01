import Vue from 'vue'
import VueRouter from 'vue-router'
import { i18n, locales } from '../i18n'
import PageIndex from '../page/index'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    ...locales.map(locale => ({
      name: locale,
      path: `/${locale}`,
      component: PageIndex
    })),
    {
      name: 'index',
      path: '*',
      component: PageIndex
    }
  ]
})

router.beforeEach(({name}, from, next) => {
  const locale = locales.indexOf(name) === -1
    ? (locales.indexOf(navigator.language) === -1 ? locales[0] : navigator.language)
    : name
  if (name === 'index') {
    return next(locale)
  }
  i18n.locale = locale
  next()
})

export default router
