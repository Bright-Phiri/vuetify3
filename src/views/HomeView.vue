<template>
  <v-row class="px-12">
    <v-col cols="12">
      <v-card rounded="shaped" elevation="2">
        <v-card-title class="d-flex justify-space-between">
            <span>Team</span>
            <v-btn color="#12519A" prepend-icon="mdi-plus" variant="outlined" class="text-capitalize">New Member</v-btn>
          </v-card-title>
        <v-card-text>
          <div class="d-flex">
              <v-col cols="3" class="px-0">
                <v-text-field label="Search" prepend-inner-icon="mdi-magnify" v-model="search" density="compact" variant="outlined"></v-text-field>
              </v-col>
            </div>
          <v-data-table :headers="headers" :items="users" :loading="loading" :search="search" hover density="comfortable">
            <template v-slot:loader>
              <v-progress-linear height="3" class="gradient-loader" indeterminate></v-progress-linear>
            </template>
            <template v-slot:[`item.avatar`]="{ item }">
                <v-avatar size="33" :image="item.avatar"></v-avatar>
            </template>
            <template v-slot:[`item.status`]="{ item }">
              <v-chip v-if="item.status == 'Active'" color="green" rounded="medium" variant="outlined" size="small" style="width: 65px">{{item.status}}</v-chip>
              <v-chip v-if="item.status == 'Inactive'" color="red" rounded="medium" variant="outlined" size="small" style="width: 65px">{{item.status}}</v-chip>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
                <v-btn @click="item" density="compact"  color="#274DD2" variant="text"><v-icon size="small" icon="mdi-pencil"/> </v-btn>
                <v-btn density="comfortable" color="red" variant="text" @click="item"><v-icon size="small" icon="mdi-delete"/></v-btn>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, onMounted, reactive  } from 'vue';
const headers = [
 
  { title: "Avatar", align: "start", sortable: false, key: "avatar" },
  { title: "Name", key: "name" },
  { title: "Username", key: "username" },
  { title: "Email", key: "email" },
  { title: "Phone Number", key: "manager" },
  { title: "Role", key: "phone" },
  { title: "Status", key: "status" },
  { title: "Actions", key: "actions" },
];

const users = reactive([]);
const search = ref("");

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    users.push(
      { name: "John Doe", avatar: "./75846202.jpg", username: "johndoe", email: "john@example.com", manager: "123-456-7890", phone: "Admin", status: "Active" },
  { name: "Jane Smith", avatar: "./avatar.jpg", username: "janesmith", email: "jane@example.com", manager: "987-654-3210", phone: "User", status: "Inactive" },
  { name: "Alice Johnson", avatar: "./1501387.jpg", username: "alicejohnson", email: "alice@example.com", manager: "567-890-1234", phone: "User", status: "Active" },
  { name: "Bob Brown", avatar: "./44230356.jpg", username: "bobbrown", email: "bob@example.com", manager: "345-678-9012", phone: "Admin", status: "Inactive" }
    );
    loading.value = false
  }, 2000);
});

</script>

<style scoped>
.gradient-loader {
  background: linear-gradient(90deg, #FAC347, #FF5733); 
}
</style>