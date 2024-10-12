<template>
  <v-app>
    <v-main class="bg-grey-lighten-4">
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
