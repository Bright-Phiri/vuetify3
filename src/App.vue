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

<!-- <style>
.background-container {
  height: 25vh; /* Set the height to 25% of the viewport height */
  overflow: visible; /* Hide content overflow */
  background-color: black;
}
</style> -->

<style>
.background-container {
  height: 25vh; /* Set the height to 25% of the viewport height */
  overflow: visible; /* Hide content overflow */
  background-image: url('https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg');
  background-size: cover; /* Ensure the image covers the entire container */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Prevent the background image from repeating */
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

