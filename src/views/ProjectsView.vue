<template>
    <v-row class="px-12">
      <v-col cols="12">
        <v-card rounded="shaped" elevation="2">
          <v-card-title class="d-flex justify-space-between">
            <span>Projects</span>
            <v-btn color="black" prepend-icon="mdi-plus" variant="outlined" class="text-capitalize">Add Project</v-btn>
          </v-card-title>
          <v-card-text>
            <div class="d-flex">
                <v-col cols="3" class="px-0">
                <v-text-field label="Search" prepend-inner-icon="mdi-magnify" v-model="search" density="compact" variant="outlined"></v-text-field>
               </v-col>
            </div>
            <v-data-table :headers="headers" :items="projects" :loading="loading" :search="search" hover density="comfortable">
              <template v-slot:loader>
                <v-progress-linear height="3" indeterminate class="gradient-loader"></v-progress-linear>
              </template>
              <template v-slot:[`item.avatar`]="{ item }">
                <v-avatar size="33" :image="item.avatar"></v-avatar>
              </template>
              <template v-slot:[`item.status`]="{ item }">
                <v-chip v-if="item.status == 'Active'" color="green" rounded="medium" variant="outlined" size="small" style="width: 65px">{{item.status}}</v-chip>
                <v-chip v-if="item.status == 'Inactive'" color="red" rounded="medium" variant="outlined" size="small" style="width: 65px">{{item.status}}</v-chip>
              </template>
              <template v-slot:[`item.actions`]="{ item }">
                <v-btn @click="editProject(item)" density="compact" color="#274DD2" variant="text">
                  <v-icon size="small">mdi-pencil</v-icon>
                </v-btn>
                <v-btn density="comfortable" color="red" variant="text" @click="deleteProject(item)">
                  <v-icon size="small">mdi-delete</v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script setup>
  import { ref, onMounted, reactive } from 'vue';
  
  const headers = [
    { title: "Project Name", align: "start", sortable: false, key: "name" },
    { title: "Manager", key: "manager" },
    { title: "Start Date", key: "startDate" },
    { title: "End Date", key: "endDate" },
    { title: "Status", key: "status" },
    { title: "Actions", key: "actions" },
  ];
  
  const projects = reactive([]);
  const search = ref("");
  const loading = ref(true);
  
  onMounted(() => {
    setTimeout(() => {
      projects.push(
        { name: "Project Alpha", avatar: "./project1.jpg", manager: "John Doe", startDate: "2023-01-01", endDate: "2023-06-01", status: "Active" },
        { name: "Project Beta", avatar: "./project2.jpg", manager: "Jane Smith", startDate: "2023-02-15", endDate: "2023-07-15", status: "Inactive" },
        { name: "Project Gamma", avatar: "./project3.jpg", manager: "Alice Johnson", startDate: "2023-03-20", endDate: "2023-08-20", status: "Active" },
        { name: "Project Delta", avatar: "./project4.jpg", manager: "Bob Brown", startDate: "2023-04-25", endDate: "2023-09-25", status: "Inactive" }
      );
      loading.value = false;
    }, 2000);
  });
  
  </script>

<style scoped>
.gradient-loader {
  background: linear-gradient(90deg, #FAC347, #FF5733); /* Adjust colors as needed */
}
</style>

  