<template>
  <div class="home">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="px-0">
          <v-card rounded="lg" elevation="1">
            <v-card-title class="text-grey d-flex justify-space-between py-3">
              <p><v-icon color="#928C99" icon="mdi-playlist-check"/> Subscriptions</p> 
              <v-btn prepend-icon="mdi-plus" elevation="1" color="#274DD2">Add subscription</v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <div class="d-flex justify-space-between">
              <v-col cols="3" class="pt-4 py-0">
                <v-text-field density="compact" prepend-inner-icon="mdi-magnify" variant="outlined" placeholder="Search subscription"></v-text-field>
              </v-col>
              <v-btn icon="mdi-refresh" size="small" color="#274DD2" variant="text" class="mt-3 mr-3"></v-btn>
              </div>
              <v-divider></v-divider>
            <v-card-text>
              
              <v-data-table show-select class="elevation-0" hover :headers="headers" loading :search="search"></v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
const headers = [
  {
    title: 'Id',
    align: 'start',
    sortable: false,
    key: 'id',
  },
  { title: 'First Name', key: 'first_name', align: 'end' },
  { title: 'Last Name', key: 'last_name', align: 'end' },
  { title: 'Username', key: 'username', align: 'end' },
  { title: 'Email Address', key: 'email', align: 'end' },
  { title: 'Phone Number', key: 'phone', align: 'end' },
  { title: 'Actions', key: 'actions', align: 'end' },
]

const users = reactive([])



onMounted(()=> {
  users.push({id: 1, first_name: 'Bright', last_name: 'Issah', username: 'bissah', email: 'bissah@mra.mw', phone: '+265993498492'})
});
</script>


