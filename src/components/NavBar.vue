<!-- <template>
   <div class="NavBar">
    <v-navigation-drawer :width="282" v-model="drawer" order="0">
      <v-img class="mt-2" src="../images/logo.png" height="55"></v-img>
      <v-list class="mt-2" nav>
        <v-list-item v-for="link in links" :key="link.title" :prepend-icon="link.icon" :title="link.title" :value="link.title" router :to="link.route"></v-list-item>
      </v-list>
      <template v-slot:append>
        <v-list class="mb-1" nav>
        <v-list-item v-for="link in sys_links" :key="link.title" :prepend-icon="link.icon" :title="link.title" :value="link.title" router :to="link.route"></v-list-item>
      </v-list>
      </template>
    </v-navigation-drawer>

    <v-app-bar elevation="1" order="1">
      <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
      <template v-slot:append>
        <v-btn color="black" icon="mdi-brightness-4" variant="tonal" v-on:click="toggleTheme"></v-btn>
        <v-icon icon="mdi-account" class="ml-2" />
        <p class="mx-3">Bright Issah</p>
      </template>
    </v-app-bar>
    <Transition name="slide-fade" mode="in-out">
      <router-view/>
    </Transition>
   </div>
</template> -->

<template>
  <div class="NavBar">
   <v-navigation-drawer color="#1B2738" v-model="drawer" order="0">
     <v-img class="mt-2" src="../images/logo.png" height="55"></v-img>
     <v-list class="mt-2" nav>
       <v-list-item class="rounded-e-xl" v-for="link in links" :key="link.title" :prepend-icon="link.icon" :title="link.title" :value="link.title" :to="link.route"></v-list-item>
     </v-list>
     <template v-slot:append>
       <v-list class="mb-1" nav>
       <v-list-item v-for="link in sys_links" :key="link.title" :prepend-icon="link.icon" :title="link.title" :value="link.title" router :to="link.route"></v-list-item>
     </v-list>
     </template>
   </v-navigation-drawer>

   <v-app-bar color="#F4F5FA" elevation="0" order="1">
     <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>

     <v-app-bar-title></v-app-bar-title>
     <template v-slot:append>
       <v-btn color="#8E8997" icon="mdi-brightness-4" variant="tonal" v-on:click="toggleTheme"></v-btn>
       <v-icon icon="mdi-account" color="#8E8997" class="ml-2" />
       <p class="mx-3 text-grey-darken-1">Bright Issah</p>
     </template>
   </v-app-bar>
   
   <Transition name="slide-fade" mode="in-out">
     <router-view/>
   </Transition>
   <v-footer app color="#F4F5FA" height="44">
    <p class="text-grey">&copy;{{ new Date().getFullYear() }} <span class="text-blue">Aliscience</span>, All rights Reserved</p>
   </v-footer>
  </div>
</template>
<script setup>
import { ref } from "vue"
import { useTheme } from 'vuetify' 

const drawer = ref(null)
const links = [
  { title: "Dashboard", icon: "mdi-view-dashboard", route: "/" },
  { title: "Subscriptions", icon: "mdi-playlist-check", route: "/categories" },
  { title: "Databases", icon: "mdi-database", route: "/items" },
  { title: "Data access control", icon: "mdi-security", route: "/inventory" },
  { title: "Logs", icon: "mdi-book-open-page-variant", route: "/orders" },
  { title: "Billing & Payments", icon: "mdi-credit-card-outline", route: "/returns" },
  { title: "Support", icon: "mdi-lifebuoy", route: "/refunds" },
  { title: "Users", icon: "mdi-account-multiple", route: "/users" },
]

const sys_links = [
  { title: "Account Settings", icon: "mdi-cog", route: "/settings" },
  { title: "Logout", icon: "mdi-logout-variant", route: "/logout" },
]

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>


<style scoped>
 .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>