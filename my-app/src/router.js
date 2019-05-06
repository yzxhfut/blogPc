import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
var isPhone = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)

var path
if(isPhone){
	path =  './views/phone/'
}else{
	path =  './views/pc/'
}
//console.log(path)

export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(path+'Home.vue')
    },
	{
		path: '/home/:tag',
		component: () => import(path+'Home.vue')
	},
    {
      path: '/info/:id/:title',
      name: 'info',
      component: () => import(path+'Article.vue')
    },
		{
			path: '/edit',
			name: 'edit',
			component: () => import(path+'Edit.vue')
		},
  ]
})
