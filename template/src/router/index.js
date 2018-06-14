import Vue from 'vue'
import Router from 'vue-router'

import LoginRoute from '../views/login/route'
import View1Route from '../views/view1/route'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/login' },

    ...LoginRoute,
    ...View1Route
  ]
})
