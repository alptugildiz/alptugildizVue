import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header'
import Content from './components/Content'




Vue.component('header-component',Header)
Vue.component('content-component',Content)

new Vue({
  el: '#app',
  render: h => h(App)
})
