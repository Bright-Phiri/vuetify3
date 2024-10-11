<template>
  <v-dialog persistent v-model="dialog" :width="820" transition="dialog-bottom-transition">
    <v-card>
      <v-card-title class="d-flex justify-space-between">Add New Team Member <v-icon v-on:click="dialog = !dialog" icon="mdi-close" ></v-icon></v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-text-field label="First Name" prepend-inner-icon="mdi-account" clearable variant="outlined" density="comfortable"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field label="Last Name" prepend-inner-icon="mdi-account" clearable variant="outlined" density="comfortable"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-text-field label="Username" prepend-inner-icon="mdi-account" clearable variant="outlined" density="comfortable"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field label="Email Address" prepend-inner-icon="mdi-email" clearable variant="outlined" density="comfortable"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-text-field label="Phone Number" prepend-inner-icon="mdi-phone" clearable-chip variant="outlined" density="comfortable"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-autocomplete label="Position" chips :items="positions" item-title="name" item-value="value" clearable prepend-inner-icon="mdi-account" variant="outlined" density="comfortable">
              <template v-slot:item="{props, item}">
                <v-list-item v-bind="props" :prepend-avatar="item.raw.avatar" :title="item.raw.fullname" :subtitle="item.raw.name"></v-list-item>
              </template>
              <template v-slot:chip="{ props, item }">
                <v-chip
                  v-bind="props"
                  :prepend-avatar="item.raw.avatar"
                  :text="item.raw.name"
                ></v-chip>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-text-field label="Password" prepend-inner-icon="mdi-lock" clearable variant="outlined" density="comfortable"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field label="Comfirm Password" prepend-inner-icon="mdi-lock" clearable  variant="outlined" density="comfortable"></v-text-field>
          </v-col>
        </v-row>

      </v-card-text>
      <v-card-actions class="d-flex justify-end mb-2 mr-2">
        <v-btn color="black" variant="outlined" v-on:click="dialog = !dialog">Cancel</v-btn>
        <v-btn color="primary" variant="outlined" v-on:click="addMember">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-row class="px-12">
    <v-col cols="12" class="p-0">
      <div class="d-flex justify-space-between">
        <v-col cols="3" class="px-0">
          <v-text-field label="Search" v-model="search" @input="filterMembers" variant="outlined" prepend-inner-icon="mdi-magnify" density="compact"></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-btn color="blue" variant="outlined" class="text-capitalize" prepend-icon="mdi-account-plus" v-on:click="dialog = !dialog">New member</v-btn>
      </div>
    </v-col>

    <v-col cols="12" v-if="loading">
      <v-progress-linear indeterminate></v-progress-linear>
    </v-col>

    <v-col v-for="user in filteredUsers" :key="user.avatar" cols="12" sm="6" md="4" lg="3">
      <v-card rounded="xl" color="#FFFAF0" elevation="1">
        <v-card-text class="d-flex flex-column justify-center align-center">
          <v-avatar size="80" :image="user.avatar"></v-avatar>
          <span class="mt-2">{{ user.name }}</span>
          <span class="mt-2"><v-icon icon="mdi-email"></v-icon>{{ user.email }}</span>
          <span class="mt-2"><v-icon icon="mdi-phone"></v-icon>{{ user.manager }}</span>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const users = reactive([]);
const filteredUsers = ref([]); // Use ref for reactivity
const search = ref("");
const dialog = ref(false);
const loading = ref(true);
const count = ref(2);

const filterMembers = () => {
  const query = search.value.toLowerCase();
  filteredUsers.value = users.filter(user =>
    user.name.toLowerCase().includes(query)
  );
};

const positions = [
  { name: 'Programmer', value: 'Programmer', avatar: './75846202.jpg', fullname: 'Bright' },
  { name: 'Systems Developer', value: 'Systems Developer', avatar: './avatar.jpg', fullname: 'Brian' },
  { name: 'Tester', value: 'Programmer', avatar: './75846202.jpg', fullname: 'James' },
  { name: 'Coder', value: 'Systems Developer', avatar: './44230356.jpg', fullname: 'Jack' }
]

const addMember = () => {
  toast.warning("Please enter all required fields", {
        autoClose: 2000,
  });
}

onMounted(() => {
  console.log(count.value);
  setTimeout(() => {
    users.push(
      { name: "John Doe", avatar: "./75846202.jpg", username: "johndoe", email: "john@example.com", manager: "123-456-7890", phone: "Admin", status: "Active" },
      { name: "Bright Phiri", avatar: "./avatar.jpg", username: "janesmith", email: "jane@example.com", manager: "987-654-3210", phone: "User", status: "Inactive" },
      { name: "Alice Johnson", avatar: "./1501387.jpg", username: "alicejohnson", email: "alice@example.com", manager: "567-890-1234", phone: "User", status: "Active" },
      { name: "Bob Brown", avatar: "./44230356.jpg", username: "bobbrown", email: "bob@example.com", manager: "345-678-9012", phone: "Admin", status: "Inactive" },
      { name: "Mary Phiri", avatar: "./22.jpg", username: "mary", email: "mary@gmail.com", manager: "345-678-9012", phone: "Admin", status: "Inactive" },
      { name: "Brian Issah", avatar: "./bb.jpeg", username: "bright", email: "bright@gmail.com", manager: "345-678-9012", phone: "Admin", status: "Inactive" },
      { name: "SenzeNajni Manjawira", avatar: "./33.jpg", username: "senze213", email: "senze@gmail.com", manager: "345-678-9012", phone: "Admin", status: "Inactive" },
      { name: "Yamikani Phiri", avatar: "./11.jpeg", username: "yami", email: "yamikani@gmail.com", manager: "345-678-9012", phone: "Admin", status: "Inactive" }
    );
    filteredUsers.value = users; // Initialize filteredUsers
    loading.value = false;
  }, 1000);
});
</script>

<style scoped>
.gradient-loader {
  background: linear-gradient(90deg, #FAC347, #FF5733); 
}
</style>
