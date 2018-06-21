import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import * as types from './store/mutation-types'


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})