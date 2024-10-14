<template>
  <v-row class="px-12">
    <v-col cols="8">
      <v-card elevation="2">
        <v-card-title>Personal Information</v-card-title>
        <v-card-text>
          <v-row class="mt-4">
            <v-col cols="6">
              <v-text-field label="First Name" variant="outlined" density="compact" prepend-inner-icon="mdi-account"></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field label="Last Name" variant="outlined" density="compact" prepend-inner-icon="mdi-account"></v-text-field>
            </v-col>
          </v-row>

          <v-row class="mt-4">
            <v-col cols="6">
              <v-text-field label="Username" variant="outlined" density="compact" prepend-inner-icon="mdi-account"></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field label="Email Address" variant="outlined" density="compact" prepend-inner-icon="mdi-email"></v-text-field>
            </v-col>
          </v-row>

          <v-row class="mt-4">
            <v-col cols="6">
              <v-text-field label="Phone Number" variant="outlined" density="compact" prepend-inner-icon="mdi-phone"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Password" variant="outlined" density="compact" prepend-inner-icon="mdi-lock"></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-end mb-2 mr-2">
          <v-btn color="black" variant="outlined">Cancel {{number}}</v-btn>
          <v-btn color="primary" variant="outlined">Update {{ numberOfBooks }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="4">
      <v-card elevation="2">
        <v-card-title>
          Security Information
        </v-card-title>

        <v-card-text>
          <v-row class="mt-4">
            <v-col cols="12">
              <v-text-field label="Old Password" variant="outlined" density="compact"
              prepend-inner-icon="mdi-lock"></v-text-field>
            </v-col>
          </v-row>
         
          <v-row class="mt-4">
            <v-col cols="12">
              <v-text-field label="New Password" variant="outlined" density="compact"
              prepend-inner-icon="mdi-lock"></v-text-field>
            </v-col>
          </v-row>
          
          <v-row class="mt-4">
            <v-col cols="12">
              <v-text-field label="Confirm New Password" variant="outlined" density="compact"
              prepend-inner-icon="mdi-lock"></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-end mb-2 mr-2">
          <v-btn color="black" variant="outlined">Cancel</v-btn>
          <v-btn color="primary" variant="outlined">Update</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import { ref, computed, reactive, onMounted } from "vue";

  export default{
    setup(){
      const number = ref(10)
      const data = reactive(
        {
          books: [
          { name: 'Java' },
          { name: 'C#' }
        ]
        }
      )
      const numberOfBooks = computed(()=>{
        return data.books.length > 0 ? 'Yes' : 'No'
      })
      onMounted( ()=>{
        console.log(number.value)
      })
      return{
        number,
        numberOfBooks
      }
    }
  }
</script>

<style scoped>
.gradient-loader {
  background: linear-gradient(90deg, #FAC347, #FF5733);
}
</style>
