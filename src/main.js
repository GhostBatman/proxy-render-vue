import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import Vue2TouchEvents from 'vue2-touch-events'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vueCountryRegionSelect from 'vue-country-region-select'

Vue.use(vueCountryRegionSelect)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(Vue2TouchEvents)

Vue.config.productionTip = false
// window.$ = window.jQuery = require('jquery')

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
