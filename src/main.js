import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";
// import axios from "../src/api/index";
import {post,get} from './request/request.js'
Vue.prototype.$post=post;
Vue.prototype.$get=get;

// Vue.prototype.$api = axios;

// import axios from 'axios'

// Vue.prototype.$axios = axios
// axios.defaults.baseURL = '/proc'
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
