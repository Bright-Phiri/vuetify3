<template>
  <div class="About">
    <v-row>
      <v-col cols="12">
        <div class="d-flex justify-space-between">
          <div class="d-flex flex-column">
            <span class="text-h5 font-weight-light">Dashboard</span>
            <span class="font-weight-light"><v-icon icon="mdi-home-outline" size="x-small" color="blue"></v-icon> / Dashboard</span>
          </div>
          <v-spacer></v-spacer>
          <v-text-field variant="outlined" density="compact" label="Search By Chart Name" class="mr-5"></v-text-field>
          <v-autocomplete variant="outlined" density="compact" label="Filter Charts By Blocks" :items="blocks"></v-autocomplete>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="6" xl="3" lg="3">
        <v-card variant="flat" color="#87CEFA" rounded="lg">
          <v-card-text class="d-flex align-center">
            <v-icon icon="mdi-cash" size="x-large" color="white"></v-icon>
            <div class="d-flex flex-column ml-3">
               <span class="text-h5 text-white font-weight-bold">K.00</span>
               <span class="text-white">Total Revenue Collected</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12" md="6" xl="3" lg="3">
        <v-card border="dashed" variant="outlined" rounded="lg">
          <v-card-text class="d-flex align-center bg-grey-lighten-4">
            <v-icon icon="mdi-application" size="x-large"></v-icon>
            <div class="d-flex flex-column ml-3">
               <span class="text-h5 font-weight-bold">0</span>
               <span>Pending Applications</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12" md="6" xl="3" lg="3">
        <v-card border="dashed" variant="outlined" rounded="lg">
          <v-card-text class="d-flex align-center bg-grey-lighten-4">
            <v-icon icon="mdi-account-multiple" size="x-large"></v-icon>
            <div class="d-flex flex-column ml-3">
               <span class="text-h5 font-weight-bold">0</span>
               <span>Total Taxpayer Registrations</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12" md="6" xl="3" lg="3">
        <v-card rounded="lg" class="elevation-3">
          <v-card-text class="d-flex align-center">
            <v-icon icon="mdi-chart-sankey" size="x-large"></v-icon>
            <div class="d-flex flex-column ml-3">
               <span class="text-h5 font-weight-bold">12</span>
               <span>Registered Tax Types</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <div class="d-flex ml-4">Open Case History (Last 30 Days)</div>
    </v-row>
  </div>
</template>


<script setup>

  const blocks = [
   'Limbe 1',
   'Limbe 2',
   'Blantyre',
   'Lilongwe',
   'Bwalo La Njovu',
   'City Centre',
   'AHL Area',
   'Mataifa'
  ]
</script>

<style scoped>

</style>