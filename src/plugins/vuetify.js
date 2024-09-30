// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'
import { md2 } from 'vuetify/blueprints'



export default createVuetify(
  {
    blueprint: md2,
    aliases: {
      MyButton: VBtn
    },
    theme: {
      defaultTheme: 'light'
    },
    defaults: {
      MyButton: {
        variant: 'outlined',
        class: 'text-capitalize',
        color: 'primary'
      },
      VCard: {
        MyButton: {
          color: 'blue',
          variant: 'flat'
        }
      }
    }
  }
)
