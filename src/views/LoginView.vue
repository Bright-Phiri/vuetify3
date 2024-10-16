<template>
  <div class="blocks">
    <v-row justify="center" align="center" class="bg-white" style="height: 100vh;">
      <v-col cols="9" class="d-flex align-center justify-center">
        <v-col cols="12">
          <v-card class="mx-auto elevation-0" elevation="8" max-width="350" rounded="xl" border variant="outlined">
            <v-card-title class="text-blue text-h5 text-center font-weight-light mt-6">BMS</v-card-title>
            <v-card-text class="text-center py-10">
              <span class="text-h5 font-weight-light mt-15">Login to your account</span>
              <v-text-field prepend-inner-icon="mdi-account" class="mt-6" variant="outlined" label="Username"
                density="compact" v-model="user.username"></v-text-field>
              <v-text-field prepend-inner-icon="mdi-lock-open" type="password" variant="outlined" label="Password"
                density="compact" v-model="user.password"></v-text-field>
              <v-btn color="blue" :loading="signInloading" @click="signIn" lass="font-weight-light" variant="flat" block>Login</v-btn>
              <span class="mt-4 text-subtitle-1 font-weight-light">Link to ICT - Helpdesk <span
                  class="text-blue">Helpdesk</span> </span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-col>
      <v-col cols="3" class="bg-blue pt-20" style="height: 100vh;">
        <v-carousel cycle :show-arrows="false" hide-delimiter-background>
          <v-carousel-item>
            <img src="/login-slide1.png" alt="Slide 1" class="carousel-image" />
            <v-row class="d-flex justify-center mt-4">
              <v-col class="text-center">
                <h2>What is BMS</h2>
                <p>A new admistration technique to capture the informal sectore into the tax net</p>
              </v-col>
            </v-row>
          </v-carousel-item>

          <v-carousel-item>
            <img src="/login-slide2.png" alt="Slide 2" class="carousel-image" />
            <v-row class="d-flex justify-center mt-4">
              <v-col class="text-center">
                <h2>What is BMS</h2>
                <p>This is an automated system designed to aid in activities introduced by BMS.</p>
              </v-col>
            </v-row>
          </v-carousel-item>

          <v-carousel-item>
            <img src="/login-slide3.png" alt="Slide 3" class="carousel-image" />
            <v-row class="d-flex justify-center mt-4">
              <v-col class="text-center">
                <h2>Support</h2>
                <p>Please contact ICT Support for any assistance</p>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const signInloading = ref(false)
const user = ref({
  username: '',
  password: ''
})
const signIn = ()=> {
  if (!user.value.username || !user.value.password) {
    toast.warning("Please enter all required fields", {
        autoClose: 2000,
  });
    return;
  }
  signInloading.value = true
  setTimeout(()=>{
    router.push({path: '/'})
    signInloading.value = false
  },3000)
}
</script>

<style scoped>
.carousel-image {
  width: 100%;
  height: auto;
}
</style>