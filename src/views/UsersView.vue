<template>
  <div class="home">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="px-0">
          <div class="d-flex justify-space-between">
            <h3 class="text-h4">Users</h3> 
            <v-btn prepend-icon="mdi-plus" variant="flat" color="primary">New User</v-btn>
          </div>
          <div class="d-flex justify-end">
            <v-btn icon="mdi-refresh" color="blue" size="small" variant="tonal" class="mt-3 mr-3"></v-btn>
            <v-col cols="3" class="px-0">
              <v-text-field label="search" density="compact" variant="outlined" append-inner-icon="mdi-magnify" v-model="search"></v-text-field>
            </v-col>
          </div>
          <v-card>
            <v-data-table class="elevation-3" hover :headers="headers" :items="users" loading loading-text="fetching users" :search="search"></v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted} from 'vue';
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
const search = ref('')
const users = reactive([])

onMounted(()=> {
  users.push({id: 1, first_name: 'Bright', last_name: 'Issah', username: 'bissah', email: 'bissah@mra.mw', phone: '+265993498492'})
})
</script>
