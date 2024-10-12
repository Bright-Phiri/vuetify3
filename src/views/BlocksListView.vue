<template>
<div class="blocks">
  <v-row>
      <v-col cols="12">
        <div class="d-flex justify-space-between">
          <div class="d-flex flex-column">
            <span class="text-h5 font-weight-light">Block Management</span>
            <span class="font-weight-light"><v-icon icon="mdi-home-outline" size="x-small" color="blue"></v-icon> / <v-icon icon="mdi-cube-outline" size="x-small"></v-icon> Manage Blocks</span>
          </div>
          <v-spacer></v-spacer>
          <v-btn variant="outlined" color="blue" class="text-capitalize" @click="loadAddNewBlockView">Add new block</v-btn>
        </div>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h6 font-weight-light d-flex justify-space-between">Block Management<v-icon icon="mdi-focus-field-horizontal" size="small"></v-icon> </v-card-title>
          <v-card-subtitle>List of all block registered in the system</v-card-subtitle>
          <v-card-text>
          <v-data-table :headers="headers" loading loading-text="Loading blocks...">
            <template v-slot:loader>
              <v-progress-linear indeterminate color="blue" height="3"></v-progress-linear>
            </template>
          </v-data-table>
        </v-card-text>
        </v-card>
      </v-col>
    </v-row>
</div>
</template>

<script setup>
import router from "../router";
  const headers = [
  { title: "Block Id", key: "block_id" },
  { title: "Name", key: "name" },
  { title: "Station", key: "station" },
  { title: "Parent Block Name", key: "parentBlock" },
  { title: "Taxpayers", key: "taxpayers" },
  { title: "Action", key: "action" },
];


const loadAddNewBlockView = ()=> {
  router.push({ path: '/add_new_block'})
};

</script>

<style scoped>

</style>
