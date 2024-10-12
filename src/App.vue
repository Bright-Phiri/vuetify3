<template>
  <v-app>
    <v-main class="custom-bg">
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data () {
    return {
      
    }
  },
}
</script>

<style scoped>
.custom-bg {
  background-color: #EBEEEF;
}
</style>

