<template>
  <div class="home">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="px-0">
          <v-card color="#F6F7F9">
            <v-card-title>
              <v-row class="mt-6">
                <v-col cols="3" class="mx-0">
                  <v-card elevation="0">
                    <v-card-text class="d-flex justify-space-between">
                      <div class="d-flex flex-column">
                        <span class="text-h6 font-weight-bold">{{ tweened.number.toFixed(0) }}</span>
                        <span>SALES</span>
                      </div>
                      <div class="d-flex flex-column justify-center">
                        <v-icon icon="mdi-shopping" color="#ECBFF4" size="x-large"></v-icon>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col cols="3" class="">
                  <v-card elevation="0">
                    <v-card-text class="d-flex justify-space-between">
                      <div class="d-flex flex-column">
                        <span class="text-h6 font-weight-bold">${{ tweened.number1.toFixed(0) }}</span>
                        <span>EARNINGS</span>
                      </div>
                      <div class="d-flex flex-column justify-center">
                        <v-icon icon="mdi-wallet" color="#CFE4DB" size="x-large"></v-icon>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col cols="3" class="">
                  <v-card elevation="0">
                    <v-card-text class="d-flex justify-space-between">
                      <div class="d-flex flex-column">
                        <span class="text-h6 font-weight-bold">{{ tweened.number3.toFixed(0) }}</span>
                        <span>ONLINE</span>
                      </div>
                      <div class="d-flex flex-column justify-center">
                        <v-icon icon="mdi-web" color="#CFE4DB" size="x-large"></v-icon>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col cols="3" class="">
                  <v-card elevation="0">
                    <v-card-text class="d-flex justify-space-between">
                      <div class="d-flex flex-column">
                        <span class="text-h6 font-weight-bold">{{ tweened.number2.toFixed(0) }}</span>
                        <span>PROJECTS</span>
                      </div>
                      <div class="d-flex flex-column justify-center">
                        <v-icon icon="mdi-briefcase-outline" color="#F4ABA2" size="x-large"></v-icon>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text>
              <v-row class="mt-5">
                <v-col cols="6">
                  <v-card elevation="0">
                    <v-card-title class="d-flex justify-space-between">
                      <span class="text-subtitle-2">Earnings this week</span>
                      <div>
                        <v-icon icon="mdi-autorenew" size="x-small"></v-icon>
                        <v-icon icon="mdi-wrench-outline" size="x-small"></v-icon>
                      </div>
                    </v-card-title>
                    <v-card-text>
                      <VueApexCharts width="500" type="area" :options="chartOptions" :series="series"></VueApexCharts>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-card elevation="0">
                    <v-card-title class="d-flex justify-space-between">
                      <span class="text-subtitle-2">New Stock</span>
                      <div>
                        <v-icon icon="mdi-autorenew" size="x-small"></v-icon>
                        <v-icon icon="mdi-wrench-outline" size="x-small"></v-icon>
                      </div>
                    </v-card-title>
                    <v-card-text>
                      <VueApexCharts width="500" type="bar" :options="chartOptions" :series="series"></VueApexCharts>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from 'vue';
import VueApexCharts from "vue3-apexcharts";
import gsap from 'gsap'
const series = ref([
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60, 70, 91],
  },
])
const chartOptions = {
  chart: {
    width: 380,
    height: 400,
    id: "chart"
  },
  labels: [],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
}
const number = ref(0)
const number2 = ref(0)
const number1 = ref(0)
const number3 = ref(0)
const tweened = reactive({
  number: 0,
  number1: 0,
  number2: 0,
  number3: 0
})

watch(number, (n) => {
  gsap.to(tweened, { duration: 0.5, number: Number(n) || 0 })
})

watch(number1, (n) => {
  gsap.to(tweened, { duration: 0.5, number1: Number(n) || 0 })
})

watch(number2, (n) => {
  gsap.to(tweened, { duration: 0.5, number2: Number(n) || 0 })
})

watch(number3, (n) => {
  gsap.to(tweened, { duration: 0.5, number3: Number(n) || 0 })
})

onMounted(() => {
  number.value = 500
  number1.value = 800
  number2.value = 40
  number3.value = 30
  gsap.to(tweened, { duration: 0.9, number: Number(number.value) || 0 })
  gsap.to(tweened, { duration: 0.10, number: Number(number1.value) || 0 })
  gsap.to(tweened, { duration: 0.10, number: Number(number2.value) || 0 })
  gsap.to(tweened, { duration: 0.9, number: Number(number3.value) || 0 })
})
</script>
