import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

const proxyurl = "https://cors-anywhere.herokuapp.com/";

axios.defaults.baseURL = proxyurl+process.env.VUE_APP_URL_BASE_SERVICE

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
