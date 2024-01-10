<template>
  <div class="home">
    <v-container fluid>
      <!--Add user dialog-->
      <v-dialog v-model="addUserDialog" persistent width="750" transition="fab-transition">
        <v-card>
          <v-card-title class="d-flex justify-space-between">
            New User
            <v-icon icon="mdi-close" size="small" v-on:click="addUserDialog = ! addUserDialog"/>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field density="compact" label="First Name" v-model="user.username" variant="underlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field density="compact" label="First Name" variant="underlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field density="compact" label="First Name" variant="underlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field density="compact" label="First Name" variant="underlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field density="compact" label="First Name" variant="underlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field density="compact" label="First Name" variant="underlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field density="compact" label="First Name" variant="underlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field density="compact" label="First Name" variant="underlined"></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn class="secondary" variant="tonal" v-on:click="addUserDialog = !addUserDialog">Cancel</v-btn>
            <v-btn color="primary" variant="flat" v-on:click="saveUser">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-row>
        <v-col cols="12" class="px-0">
          <div class="d-flex justify-space-between">
            <h3 class="text-h5 text-primary">User Management</h3>
            <v-btn prepend-icon="mdi-account-plus" variant="flat" color="primary" v-on:click="addUserDialog = !addUserDialog">New User</v-btn>
          </div>
          <div class="d-flex justify-end">
            <v-btn icon="mdi-refresh" color="blue" size="small" variant="tonal" class="mt-3 mr-3"></v-btn>
            <v-col cols="3" class="px-0">
              <v-text-field label="search" density="compact" variant="outlined" append-inner-icon="mdi-magnify" v-model="search"></v-text-field>
            </v-col>
          </div>
          <v-card>
            <v-data-table class="elevation-1" hover :headers="headers" loading :search="search"></v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, reactive, inject, onMounted } from 'vue';
const swal = inject('$swal')
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
const user = reactive({
  first_name: null
});

const addUserDialog = ref(false)

const saveUser = () => {
  if (!user.first_name) {
    swal({
      title: 'Fields validation',
      text: 'Please enter in all fields.',
      icon: 'error',
    });
    return;
  }
};

onMounted(()=> {
  users.push({id: 1, first_name: 'Bright', last_name: 'Issah', username: 'bissah', email: 'bissah@mra.mw', phone: '+265993498492'})
});
</script>

<style>
.swal-container {
  z-index: 2000;
};
</style>
