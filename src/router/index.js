import Vue from 'vue'
import VueRouter from 'vue-router'
import { locales } from '../i18n'
import PageIndex from '../page/index'
import Page404 from '../page/404'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: PageIndex
    },
    ...locales.map(locale => ({
      path: `/${locale}`,
      component: PageIndex
    })),
    {
      path: '*',
      component: Page404
    }
  ]
})
