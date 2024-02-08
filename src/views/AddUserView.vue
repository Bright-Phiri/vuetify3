<template>
  <div class="home">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="px-0">
          <v-card rounded="lg" elevation="1">
            <v-card-title class="text-grey d-flex justify-space-between py-3">
              <p><v-icon color="#928C99" icon="mdi-account-plus"/> Add User</p> 
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn color="black" variant="outlined" class="mb-3" @click="loadUsersPage">Cancel</v-btn>
              <v-btn color="green" variant="elevated" class="mb-3">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import router from '../router';

const loadUsersPage = ()=> {
  router.push({ path: '/categories'})
}
</script>
