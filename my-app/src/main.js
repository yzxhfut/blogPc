import Vue from 'vue'
import App from './App.vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './plugins/element.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(mavonEditor)
Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
