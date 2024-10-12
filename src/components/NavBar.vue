<template>
  <div class="NavBar">
     <v-dialog max-width="540" persistent v-model="logoutDialog">
       <v-card>
         <v-card-title class="d-flex justify-space-between text-h6 font-height-light">Log out <v-icon color="red" icon="mdi-close" @click="logoutDialog = !logoutDialog"></v-icon> </v-card-title>
         <v-divider></v-divider>
         <v-card-text>Are you sure you would like to logout?</v-card-text>
         <v-divider></v-divider>
         <v-card-actions class="d-flex justify-end mb-2">
           <v-btn variant="outlined" class="text-capitalize px-3" color="black" rounded="xl" @click="logoutDialog = !logoutDialog">Close</v-btn>
           <v-btn variant="flat" class="text-capitalize px-5" color="blue" @click="logout" rounded="xl">Logout</v-btn>
         </v-card-actions>
       </v-card>
     </v-dialog>
    <v-app-bar flat color="#2D3541">
     <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>
     <v-app-bar-title class="text-h7 font-weight-thin">Block Managment Information System</v-app-bar-title>
     <v-text-field
        v-model="searchText"
        class="ml-10 mt-5 text-white"
        placeholder="Enter ID. i.e Block ID or TPIN"
        variant="outlined"
        density="compact"
        size="small"
        append-inner-icon="mdi-magnify"
      ></v-text-field>
      <v-spacer></v-spacer>
     <template v-slot:append>
       <div class="d-flex">
         <v-icon class="mt-3" icon="mdi-account-circle"></v-icon>
         <span class="mt-3 ml-1">biphiri</span>
         <v-btn icon="mdi-logout" @click="showLogoutDialog"></v-btn>
       </div>
     </template>
    </v-app-bar>
    <v-navigation-drawer color="#395BB6" rail :rail-width="45" permanent floating>
      <v-list>
        <v-list-item prepend-icon="mdi-magnify" to="/search"></v-list-item>
        <v-list-item prepend-icon="mdi-home-outline" to="/dashboard"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  
    <v-navigation-drawer :width="245" v-model="drawer" floating>
      <v-list nav>
        <v-list-item-subtitle class="mt-4">MAIN MENU</v-list-item-subtitle>
        <v-divider class="my-3"></v-divider>
        <v-list-item v-for="item in menuItems" :key="item.text" :prepend-icon="item.icon" :title="item.text" :to="item.to"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <Transition name="slide-fade" mode="in-out">
      <router-view />
    </Transition>
  </div>
</template>

<script>
import { ref } from 'vue'
import router from '@/router';
export default {
  setup() {
    const drawer = ref(null)
    const logoutDialog = ref(false)
    const menuItems = [
      {
        text: "Dashboard",
        icon: "mdi-home-outline",
        to: "/dashbaord",
      },
      {
        text: "Block Info",
        icon: "mdi-information",
        to: "/blocks",
      },
      {
        text: "Presumptive Tax",
        icon: "mdi-pipe-wrench",
        to: "/tasks",
      },
      {
        text: "Taxpayer Assessment",
        icon: "mdi-magnify",
        to: "/team",
      },
      {
        text: "Reports",
        icon: "mdi-poll",
        to: "/settings",
      },
      {
        text: "Block Cases",
        icon: "mdi-book-variant",
        to: "/block_cases",
      },
      {
        text: "Check OTP",
        icon: "mdi-check-circle",
        to: "/settings",
      },
      {
        text: "Check Id- Print Queu",
        icon: "mdi-checkbox-marked",
        to: "/settings",
      },
      {
        text: "Check ID Status",
        icon: "mdi-checkbox-marked",
        to: "/settings",
      },
    ];

    const showLogoutDialog = () => {
      logoutDialog.value = true
    }

    const logout = ()=> {
      router.push( { path: '/login' })
    };

    return {
      drawer,
      menuItems,
      logoutDialog,
      showLogoutDialog,
      logout
    }
  }
};
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
