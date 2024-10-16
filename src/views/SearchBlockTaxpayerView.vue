<template>
  <div class="blocks">
    <v-row>
      <v-col cols="12">
        <div class="d-flex justify-space-between">
          <div class="d-flex flex-column">
            <span class="text-h5 font-weight-light">Global Search</span>
            <span class="font-weight-light"><v-icon icon="mdi-home-outline" size="x-small" color="blue"></v-icon>
              /
              <v-icon icon="mdi-magnify" size="x-small" color="blue"></v-icon>
              <span>Search Taxpayer</span>
            </span>
          </div>
        </div>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex text-caption justify-space-between pb-0">
            From here, you can conduct a global search in the system. For example, you can search for a taxpayer by
            Block ID, TIN, Branch ID.
            <v-icon @click="drawer = !drawer" icon="mdi-focus-field-horizontal" size="x-large"></v-icon>
          </v-card-title>
          <v-card-text>
            <p class="text-caption">
              Block ID can be found by clicking on the Block Info on the left menu and going to the List of Blocks and
              looking for the Block ID column.<br>
              TIN can be found by navigating to the Block Taxpayers against a block and looking for the Branch ID
              column.<br>
              The first number before the backslash "/" is the TIN, while the Branch ID can be found under the Branch ID
              column and the second number after the backslash is the Branch ID.
            </p>
            <h3 class="mt-4 text-subtitle-2">Enter BlockID,TIN or BrachId</h3>
            <v-text-field class="mt-4" label=" BlockID,TIN,BrachId" variant="outlined" density="compact"></v-text-field>
          </v-card-text>
          <v-card-actions class="d-flex justify-end py-4">
            <v-btn class="text-capitalize" variant="elevated" color="blue">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const drawer = inject('drawerState');
</script>

<style scoped></style>
