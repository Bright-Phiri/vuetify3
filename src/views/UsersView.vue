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
          
          <v-card hover>
            <v-data-table class="elevation-1" hover :headers="headers" items-per-page="6" :items="users" :loading="loading" :search="search">
              <template v-slot:[`item.avatar`]="{ item }">
                  <v-avatar :image="item.avatar"></v-avatar>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                  <v-btn @click="item" color="#274DD2" variant="outlined"><v-icon icon="mdi-pencil"/> </v-btn>
                  <v-btn class="ml-3" color="red" variant="outlined" @click="item"><v-icon icon="mdi-delete"/></v-btn>
                </template>
            </v-data-table>
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
  { title: 'Avatar', key: 'avatar' },
  { title: 'First Name', key: 'first_name'},
  { title: 'Last Name', key: 'last_name'},
  { title: 'Username', key: 'username'},
  { title: 'Email Address', key: 'email'},
  { title: 'Phone Number', key: 'phone'},
  { title: 'Actions', key: 'actions'},
]
const search = ref('')
const loading = ref(false)
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
  users.push(
  { id: 1, avatar: 'https://randomuser.me/api/portraits/women/7.jpg', first_name: 'Bright', last_name: 'Issah', username: 'bissah', email: 'bissah@mra.mw', phone: '+265993498492'},
  { id: 1, avatar: 'https://randomuser.me/api/portraits/women/3.jpg', first_name: 'Bright', last_name: 'Issah', username: 'bissah', email: 'bissah@mra.mw', phone: '+265993498492'},
  { 
    id: 103, 
    avatar: 'https://randomuser.me/api/portraits/women/7.jpg', 
    first_name: 'Daniel', 
    last_name: 'Williams', 
    username: 'dwilliams', 
    email: 'dwilliams@example.com', 
    phone: '+2233445566'
  },
  { 
    id: 104, 
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg', 
    first_name: 'Eva', 
    last_name: 'Brown', 
    username: 'ebrown', 
    email: 'ebrown@example.com', 
    phone: '+3344556677'
  },
  { 
    id: 105, 
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg', 
    first_name: 'Frank', 
    last_name: 'Davis', 
    username: 'fdavis', 
    email: 'fdavis@example.com', 
    phone: '+4455667788'
  },
  { 
    id: 106, 
    avatar: 'https://randomuser.me/api/portraits/men/58.jpg', 
    first_name: 'Grace', 
    last_name: 'Taylor', 
    username: 'gtaylor', 
    email: 'gtaylor@example.com', 
    phone: '+5566778899'
  },
  { 
    id: 107, 
    avatar: 'https://randomuser.me/api/portraits/women/47.jpg', 
    first_name: 'Henry', 
    last_name: 'Anderson', 
    username: 'handerson', 
    email: 'handerson@example.com', 
    phone: '+6677889900'
  },
  { 
    id: 108, 
    avatar: 'https://randomuser.me/api/portraits/men/62.jpg', 
    first_name: 'Ivy', 
    last_name: 'Hill', 
    username: 'ihill', 
    email: 'ihill@example.com', 
    phone: '+7788990011'
  },
  { 
    id: 109, 
    avatar: 'https://randomuser.me/api/portraits/women/23.jpg', 
    first_name: 'Jack', 
    last_name: 'Young', 
    username: 'jyoung', 
    email: 'jyoung@example.com', 
    phone: '+8899001122'
  },
  { 
    id: 110, 
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg', 
    first_name: 'Katherine', 
    last_name: 'White', 
    username: 'kwhite', 
    email: 'kwhite@example.com', 
    phone: '+9900112233'
  },
  { 
    id: 111, 
    avatar: 'https://randomuser.me/api/portraits/men/68.jpg', 
    first_name: 'Leo', 
    last_name: 'Miller', 
    username: 'lmiller', 
    email: 'lmiller@example.com', 
    phone: '+0011223344'
  }
  )
});
</script>


