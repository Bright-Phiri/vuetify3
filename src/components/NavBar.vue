<template>
  <div class="NavBar">
    <v-navigation-drawer 
     
    >
      <v-list class="mt-5">
        <v-list-item prepend-avatar="../logo1.png">
          <template v-slot:title>
            <span class="text-h4 font-weight-bold">TaskTrek</span>
          </template>
        </v-list-item>
      </v-list>
       <v-list nav>
          <v-list-item prepend-icon="mdi-home-outline" title="Home" to="/dashbaord"></v-list-item>
          <v-list-item prepend-icon="mdi-view-grid" title="Projects" to="/projects">
            <template v-slot:append>
              <v-btn density="compact" color="black" icon variant="tonal">
                <v-icon icon="mdi-plus" size="14"></v-icon>
              </v-btn>
            </template>
          </v-list-item>
          <v-list-item prepend-icon="mdi-format-list-checks" title="Tasks" to="/tasks">
            <template v-slot:append>
              <v-btn density="compact" color="black" icon variant="tonal">
                <v-icon icon="mdi-plus" size="14"></v-icon>
              </v-btn>
            </template>
          </v-list-item>
          <v-list-item prepend-icon="mdi-dots-triangle" title="Team" to="/team"></v-list-item>
          <v-list-item prepend-icon="mdi-cog" title="Settings" to="/settings"></v-list-item>
          
       </v-list>
       <template v-slot:append>
          <v-list-item prepend-icon="mdi-information" title="Help & information" to="/help"></v-list-item>
          <v-list-item class="mb-10" prepend-icon="mdi-logout" title="Log out" to="/logout"></v-list-item>
          </template>
    </v-navigation-drawer>
    <v-app-bar density="prominent">
      <v-app-bar-title>
        <div class="d-flex flex-column mx-10">
          <span class="text-h4 font-weight-bold">Hello, Bright</span>
          <span class="text-subtitle-2 font-weight-light">Track team progress here, You almost reach a goal</span>
        </div>
      </v-app-bar-title>
      <template v-slot:append>
        <span>16 May, 2023</span>
        <v-btn class="mx-3" icon="mdi-calendar" variant="tonal"></v-btn>
      </template>
    </v-app-bar>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'NavBar',

  data: () => ({
  }),
}
</script>
