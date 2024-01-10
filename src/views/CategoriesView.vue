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
              <v-data-table show-select class="elevation-0" items-per-page="8" hover :headers="headers" :items="users" loading-text="Loading users" :loading="loading" :search="search">
                <template v-slot:[`item.avatar`]="{ item }">
                  <v-avatar :image="item.avatar"></v-avatar>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                  <v-btn @click="item" color="#274DD2" variant="outlined"><v-icon icon="mdi-pencil"/> </v-btn>
                  <v-btn class="ml-3" color="red" variant="outlined" @click="item"><v-icon icon="mdi-delete"/></v-btn>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
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

const users = reactive([])
const loading = ref(false)


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


