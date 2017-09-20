// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import './assets/css/index.css'
import indexJs from './assets/js/index.js'

//方法二:注册为全局的函数  
//
//首先在main.js文件中引入  
//import axios from '../node_modules/axios';  
	import axios from 'axios'
Vue.prototype.axios = axios; 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
