import Vue from 'vue'
import App from './App.vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
//import Bmob from "hydrogen-js-sdk";
import './plugins/element.js'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(mavonEditor)
Vue.config.productionTip = false

//Bmob.initialize("b42456a6a9f93f1de1c1639a51496d21", "bc3230dd9cd4181c689c827e1138ba80");
//Vue.prototype.Bmob = Bmob

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
