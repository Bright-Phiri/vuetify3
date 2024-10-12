<template>
  <div class="Dashboard">
    <v-row>
      <v-col cols="12">
        <div class="d-flex justify-space-between">
          <div class="d-flex flex-column">
            <span class="text-h5 font-weight-light">Dashboard</span>
            <span class="font-weight-light"><v-icon icon="mdi-home-outline" size="x-small" color="blue"></v-icon> / Dashboard</span>
          </div>
          <v-spacer></v-spacer>
          <v-text-field variant="outlined" density="compact" label="Search By Chart Name" class="mr-5"></v-text-field>
          <v-autocomplete variant="outlined" density="compact" label="Filter Charts By Blocks" :items="blocks"></v-autocomplete>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" sm="6" md="6" xl="3" lg="3">
        <v-card variant="flat" color="#87CEFA" rounded="lg">
          <v-card-text class="d-flex align-center">
            <v-icon icon="mdi-cash" size="x-large" color="white"></v-icon>
            <div class="d-flex flex-column ml-3">
               <span class="text-h5 text-white font-weight-bold">K.00</span>
               <span class="text-white">Total Revenue Collected</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6" sm="6" md="6" xl="3" lg="3">
        <v-card border="dashed" variant="outlined" rounded="lg">
          <v-card-text class="d-flex align-center bg-grey-lighten-4">
            <v-icon icon="mdi-application" size="x-large"></v-icon>
            <div class="d-flex flex-column ml-3">
               <span class="text-h5 font-weight-bold">0</span>
               <span>Pending Applications</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6" sm="6" md="6" xl="3" lg="3">
        <v-card border="dashed" variant="outlined" rounded="lg">
          <v-card-text class="d-flex align-center bg-grey-lighten-4">
            <v-icon icon="mdi-account-multiple" size="x-large"></v-icon>
            <div class="d-flex flex-column ml-3">
               <span class="text-h5 font-weight-bold">0</span>
               <span>Total Taxpayer Registrations</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6" sm="6" md="6" xl="3" lg="3">
        <v-card rounded="lg" class="elevation-3">
          <v-card-text class="d-flex align-center">
            <v-icon icon="mdi-chart-sankey" size="x-large"></v-icon>
            <div class="d-flex flex-column ml-3">
               <span class="text-h5 font-weight-bold">12</span>
               <span>Registered Tax Types</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
     <v-col cols="12">
      <div class="d-flex text-h6 font-weight-light">Open Case History (Last 30 Days)</div>
     </v-col>
      <v-col cols="6">
        <v-card variant="flat">
          <v-card-title class="text-subtitle-1 font-weight-light">De-registration</v-card-title>
          <v-card-text>
            <div id="deRegistrationChart"></div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card variant="flat">
          <v-card-title class="text-subtitle-1 font-weight-light">Acquisition of EFD machine</v-card-title>
          <v-card-text>
            <div id="efdMachineChart"></div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card>
          <v-card-title class="text-subtitle-1 font-weight-light">EFD Clearance</v-card-title>
          <v-card-text>
            <div id="efdClearanceChart"></div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card>
          <v-card-title class="text-subtitle-1 font-weight-light">Enforcement of EFD Usage</v-card-title>
          <v-card-text>
            <div id="efdUsageEnforcementChart"></div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card>
          <v-card-title class="text-subtitle-1 font-weight-light">Incomplete Registration</v-card-title>
          <v-card-text>
            <div id="incompleRegistrationChart"></div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card>
          <v-card-title class="text-subtitle-1 font-weight-light">Issue of Open Price letter EFD Facility</v-card-title>
          <v-card-text>
            <div id="efdFacilityChart"></div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script setup>
 import { onMounted } from 'vue';
 import ApexCharts from 'apexcharts';

  const blocks = [
   'Limbe 1',
   'Limbe 2',
   'Blantyre',
   'Lilongwe',
   'Bwalo La Njovu',
   'City Centre',
   'AHL Area',
   'Mataifa'
  ]

  // Function to generate last 30 days for x-axis labels
const getLast30Days = () => {
  const dates = [];
  const today = new Date();
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    dates.push(date.toISOString().split('T')[0]); // Format: YYYY-MM-DD
  }
  return dates;
};

// ApexCharts options (generic) for all charts
const chartOptions = (chartTitle) => ({
  chart: {
    type: 'line',
    height: 350,
    toolbar: { show: false },
  },
  xaxis: {
    categories: getLast30Days(),
    labels: { rotate: -45 },
  },
  yaxis: {
    min: 0,
    max: 10,
    tickAmount: 10,
  },
  stroke: { width: 2 },
  markers: { size: 4 },
  dataLabels: { enabled: false },
  grid: { borderColor: '#e7e7e7' },
  series: [
    {
      name: chartTitle,
      data: Array(30).fill(0), // Mock data
    },
  ],
});

// Function to initialize and render a chart
const renderChart = (chartId, options) => {
  const chart = new ApexCharts(document.querySelector(chartId), options);
  chart.render();
};

onMounted(() => {
  // Render each chart with its unique options

  // De-registration chart
  renderChart("#deRegistrationChart", chartOptions('De-registration'));

  // Acquisition of EFD machine chart
  renderChart("#efdMachineChart", chartOptions('Acquisition of EFD machine'));

  // EFD Clearance chart
  renderChart("#efdClearanceChart", chartOptions('EFD Clearance'));

  // Enforcement of EFD Usage chart
  renderChart("#efdUsageEnforcementChart", chartOptions('Enforcement of EFD Usage'));

  // Incomplete Registration chart
  renderChart("#incompleRegistrationChart", chartOptions('Incomplete Registration'));

  // Issue of Open Price EFD facility chart
  renderChart("#efdFacilityChart", chartOptions('Issue of Open Price letter EFD Facility'));
});
</script>

<style scoped>

</style>