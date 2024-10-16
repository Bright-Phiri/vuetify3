<template>
  <div class="blocks">
    <v-row>
        <v-col cols="12">
          <div class="d-flex justify-space-between">
            <div class="d-flex flex-column">
              <span class="text-h5 font-weight-light">Block Cases</span>
              <span class="font-weight-light"><v-icon icon="mdi-home-outline" size="x-small" color="blue"></v-icon> / <v-icon icon="mdi-book-variant" size="x-small"></v-icon>Block Cases</span>
            </div>
          </div>
        </v-col>
  
        <v-col cols="12">
          <v-card>
            <v-card-title class="text-h6 font-weight-light d-flex justify-space-between">Case List<v-icon @click="drawer = !drawer" icon="mdi-focus-field-horizontal" size="small"></v-icon> </v-card-title>
            <v-card-subtitle>List of all cases opened in your block</v-card-subtitle>
            <v-card-text>
            <v-data-table :headers="headers" loading loading-text="Loading block cases...">
              <template v-slot:loader>
                <v-progress-linear indeterminate reverse striped color="teal" height="3"></v-progress-linear>
              </template>
            </v-data-table>
          </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </div>
  </template>
  
  <script setup>
  import { inject } from 'vue';
    const headers = [
    { title: "Case Type", key: "case_type" },
    { title: "Status", key: "status" },
    { title: "Case Origin", key: "case_origin" },
    { title: "Taxpayer TIN", key: "tin" },
    { title: "Claimed By", key: "claimed_by" },
    { title: "Supervisor", key: "claimed_by" },
    { title: "", key: "action" },
  ];
  const drawer = inject('drawerState');
  

  
  </script>
  
  <style scoped>
  
  </style>
  