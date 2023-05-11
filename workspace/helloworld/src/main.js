import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios'
import Vuex from 'vuex'
import store from './store/index.js'

loadFonts()

var app = createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)

  app.config.globalProperties.$axios=axios
  app.mount('#app')
