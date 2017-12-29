// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AtComponents from 'at-ui'
import 'at-ui-style'
const VueFire = require('vuefire')
const firebase = require('firebase')

// explicit installation required in module environments
Vue.use(VueFire)
Vue.use(AtComponents)

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyBWw1sEJCSOSDFO1h9OnjNE6xo8vvRU0JE",
  authDomain: "clash-royale-clan-manage-d8254.firebaseapp.com",
  databaseURL: "https://clash-royale-clan-manage-d8254.firebaseio.com",
  projectId: "clash-royale-clan-manage-d8254",
  storageBucket: "",
  messagingSenderId: "953735548392"
};


firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
