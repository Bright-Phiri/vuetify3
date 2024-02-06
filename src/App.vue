<template>
  <v-app>
    <v-main>
      <div class="background-container">
        <v-container fluid>
          <router-view/>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<style>
.background-container {
  background-color: black;
  height: 20vh; /* Set the height to 50% of the viewport height */
  overflow: visible; /* Hide content overflow */
}
</style>


<!-- <template>
  <v-app style="background-color: #F4F5FA;">
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template> -->

