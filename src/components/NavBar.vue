<template>
   <div class="NavBar">
    <v-navigation-drawer v-model="drawer">
      <v-img class="mt-2" src="../images/logo.jpg" height="60"></v-img>
      <v-list class="mt-2" nav>
        <v-list-item v-for="link in links" :key="link.title" :prepend-icon="link.icon" :title="link.title" :value="link.title" router :to="link.route"></v-list-item>
      </v-list>
      <template v-slot:append>
        <v-list class="mb-4" nav>
        <v-list-item v-for="link in sys_links" :key="link.title" :prepend-icon="link.icon" :title="link.title" :value="link.title" router :to="link.route"></v-list-item>
      </v-list>
      </template>
    </v-navigation-drawer>

    <v-app-bar elevation="1">
      <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
      <template v-slot:append>
        <v-btn icon="mdi-brightness-4" @click="toggleTheme"></v-btn>
        <v-icon icon="mdi-account" />
        <p>Bright Issah</p>
      </template>
    </v-app-bar>
    <router-view/>
   </div>
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from 'vuetify'

const drawer = ref(null)
const links = [
  { title: "Dashboard", icon: "mdi-view-dashboard", route: "/" },
  { title: "Categories", icon: "mdi-shape-outline", route: "/categories" },
  { title: "Items", icon: "mdi-package", route: "/items" },
  { title: "Inventory", icon: "mdi-trending-up", route: "/inventory" },
  { title: "Transactions", icon: "mdi-cash-multiple", route: "/orders" },
  { title: "Returns", icon: "mdi-undo", route: "/returns" },
  { title: "Refunds", icon: "mdi-cash-refund", route: "/refunds" },
  { title: "Users", icon: "mdi-account-multiple", route: "/employees" },
]

const sys_links = [
  { title: "Settings", icon: "mdi-cog", route: "/settings" },
  { title: "Logout", icon: "mdi-logout-variant", route: "/logout" },
]

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
