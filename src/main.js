import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// Import Vue3-ApexCharts
import VueApexCharts from 'apexcharts'

loadFonts()

// Create and mount the app, globally registering VueApexCharts
createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .component('apexchart', VueApexCharts)  // Registering VueApexCharts globally
  .mount('#app')
