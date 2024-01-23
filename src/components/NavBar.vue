<template>
  <div class="NavBar">
    <v-navigation-drawer color="#2F8748" :width="250" v-model="drawer" order="0">
      <v-list class="mt-2" nav>
        <v-list-item class="mb-5" :prepend-icon="links[0].icon" :title="links[0].title" :value="links[0].title" router
          :to="links[0].route">
          <template v-slot:prepend>
            <v-icon color="#9DA139"></v-icon>
          </template>
        </v-list-item>
          <span class="ml-2 text-subtitle-2">Management</span>
        <v-list-item :prepend-icon="links[1].icon" :title="links[1].title" :value="links[1].title" router
          :to="links[1].route"></v-list-item>
        <v-list-item :prepend-icon="links[2].icon" :title="links[2].title" :value="links[2].title" router
          :to="links[2].route"></v-list-item>
        <v-list-item :prepend-icon="links[3].icon" :title="links[3].title" :value="links[3].title" router
          :to="links[3].route"></v-list-item>
        <v-list-item class="mb-5" :prepend-icon="links[4].icon" :title="links[4].title" :value="links[4].title" router
          :to="links[4].route"></v-list-item>
          <span class="ml-2 text-subtitle-2">SETTINGS</span>
        <v-list-item :prepend-icon="links[5].icon" :title="links[5].title" :value="links[5].title" router
          :to="links[5].route"></v-list-item>
        <v-list-item :prepend-icon="links[6].icon" :title="links[6].title" :value="links[6].title" router
          :to="links[6].route"></v-list-item>
      </v-list>

      <template v-slot:append>
        <v-list class="mb-1" nav>
          <v-list-item v-for="link in sys_links" :key="link.title" :prepend-icon="link.icon" :title="link.title"
            :value="link.title" router :to="link.route"></v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-app-bar elevation="0" order="1">
      <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>
        <v-col cols="3">
          <v-text-field placeholder="Search..." class="mt-5" append-inner-icon="mdi-magnify" density="compact"
            variant="outlined"></v-text-field>
        </v-col>
      </v-app-bar-title>

      <template v-slot:append>
        <span class="text-subtitle-2">Admin</span>
        <v-icon icon="mdi-menu-down" class="ml-2" />
        <v-icon icon="mdi-server" size="x-small" class="ml-4"></v-icon>
        <v-badge
          color="green"
          content="6"
          inline
        ></v-badge>
      </template>
    </v-app-bar>
    <Transition name="slide-fade" mode="in-out">
      <router-view />
    </Transition>
  </div>
</template>

<!-- <template>
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
       <v-icon icon="mdi-account" color="#8E8997" class="ml-2"/>
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
</template> -->

<script setup>
import { ref } from "vue"
// import { useTheme } from 'vuetify' 



const drawer = ref(null)
const links = [
  { title: "Dashboard", icon: "mdi-view-dashboard-outline", route: "/" },
  { title: "Apply for Terminal", icon: "mdi-file-multiple-outline", route: "/categories" },
  { title: "Clients", icon: "mdi-account-multiple-outline", route: "/items" },
  { title: "Payments", icon: "mdi-credit-card-outline", route: "/inventory" },
  { title: "Requests", icon: "mdi-book-open-page-variant", route: "/orders" },
  { title: "Profile", icon: "mdi-account", route: "/returns" },
  { title: "Security", icon: "mdi-lock", route: "/refunds" },
]

// const theme = useTheme()

// function toggleTheme () {
//   theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
// }
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
}</style>