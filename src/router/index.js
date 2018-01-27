import Vue from 'vue'
import VueRouter from 'vue-router'
import { i18n, locales } from '../i18n'
import PageIndex from '../page/index'
import Page404 from '../page/404'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'index',
      path: '/',
      component: PageIndex
    },
    ...locales.map(locale => ({
      name: locale,
      path: `/${locale}`,
      component: PageIndex
    })),
    {
      name: '404',
      path: '*',
      component: Page404
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (locales.indexOf(to.name) !== -1) {
    i18n.locale = to.name
  }
  next()
})

export default router
