import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import VueApexCharts from "vue3-apexcharts";

//sweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './assets/styles.css';

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    // VBtn: { variant: 'flat', color: 'red' }
    VTextField: { color: 'green' }
  }
})

createApp(App).use(VueApexCharts).use(VueSweetalert2).use(store).use(vuetify).use(router).mount('#app')
