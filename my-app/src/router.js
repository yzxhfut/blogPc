import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
		{
		  path: '/home/:tag',
		  name: 'home',
		  component: Home
		},
    {
      path: '/info',
      name: 'info',
      component: () => import(/* webpackChunkName: "about" */ './views/Article.vue')
    },
		{
			path: '/edit',
			name: 'edit',
			component: () => import(/* webpackChunkName: "about" */ './views/Edit.vue')
		},
		{
			path: '/test',
			name: 'test',
			component: () => import(/* webpackChunkName: "about" */ './views/Test.vue')
		}
  ]
})
