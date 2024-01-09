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

//sweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    // VBtn: { variant: 'flat', color: 'red' }
    VTextField: { color: 'primary' }
  }
})

createApp(App).use(VueSweetalert2).use(store).use(vuetify).use(router).mount('#app')
