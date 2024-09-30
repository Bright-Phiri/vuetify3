<template>
  <v-row class="px-12">
    <v-col cols="12">
      <v-card rounded="shaped" elevation="2">
        <v-card-title class="d-flex justify-space-between">
            <span>Tasks</span>
            <v-btn color="#12519A" prepend-icon="mdi-plus" variant="outlined" class="text-capitalize">Add Task</v-btn>
          </v-card-title>
        <v-card-text>
          <div class="d-flex">
            <v-col cols="3" class="px-0">
                <v-text-field label="Search" prepend-inner-icon="mdi-magnify" v-model="search" density="compact" variant="outlined"></v-text-field>
              </v-col>
            </div>
          <v-data-table :headers="headers" :items="tasks" :loading="loading" :search="search" hover density="comfortable">
            <template v-slot:loader>
              <v-progress-linear height="3" class="gradient-loader" indeterminate></v-progress-linear>
            </template>
            <template v-slot:[`item.status`]="{ item }">
              <v-chip v-if="item.status == 'Completed'" color="green" rounded="medium" variant="outlined" size="small" style="width: 85px">{{item.status}}</v-chip>
              <v-chip v-if="item.status == 'Pending'" color="orange" rounded="medium" variant="outlined" size="small" style="width: 85px">{{item.status}}</v-chip>
              <v-chip v-if="item.status == 'Overdue'" color="red" rounded="medium" variant="outlined" size="small" style="width: 85px">{{item.status}}</v-chip>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-btn @click="editTask(item)" density="compact" color="#274DD2" variant="text">
                <v-icon size="small">mdi-pencil</v-icon>
              </v-btn>
              <v-btn density="comfortable" color="red" variant="text" @click="deleteTask(item)">
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
  { title: "Task Name", key: "name" },
  { title: "Assigned To", key: "assignedTo" },
  { title: "Due Date", key: "dueDate" },
  { title: "Priority", key: "priority" },
  { title: "Status", key: "status" },
  { title: "Actions", key: "actions" },
];

const tasks = reactive([]);
const search = ref("");
const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    tasks.push(
      { name: "Design Mockups", assignedTo: "John Doe", dueDate: "2023-10-15", priority: "High", status: "Pending" },
      { name: "API Development", assignedTo: "Jane Smith", dueDate: "2023-09-30", priority: "Medium", status: "Completed" },
      { name: "User Testing", assignedTo: "Alice Johnson", dueDate: "2023-10-05", priority: "Low", status: "Overdue" },
      { name: "Deployment", assignedTo: "Bob Brown", dueDate: "2023-10-20", priority: "High", status: "Pending" }
    );
    loading.value = false;
  }, 2000);
});

</script>
<style scoped>
.gradient-loader {
  background: linear-gradient(90deg, #FAC347, #FF5733); 
}
</style>
