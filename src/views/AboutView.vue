<template>
  <div class="About">
    <v-row class="px-15">
      <v-divider thickness="2"></v-divider>
      <v-col cols="12" lg="4" sm="6" md="4">
        <v-card variant="text">
          <v-card-text class="d-flex mt-5">
            <v-btn
              icon="mdi-thumb-up-outline"
              color="black"
              variant="tonal"
            ></v-btn>
            <div class="d-flex flex-column ml-5">
              <span>Finished</span>
              <p>
                <span class="text-h5 font-weight-bold">18</span>
                <span class="text-success">
                  <v-icon icon="mdi-menu-down" /> +8 tasks</span
                >
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" lg="4" sm="6" md="4">
        <v-card variant="text">
          <v-card-text class="d-flex mt-5">
            <v-btn icon="mdi-radar" color="black" variant="tonal"></v-btn>
            <div class="d-flex flex-column ml-5">
              <span>Tracked</span>
              <p>
                <span class="text-h5 font-weight-bold">31h</span>
                <span class="text-red">
                  <v-icon icon="mdi-menu-up" /> +8 tasks</span
                >
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" lg="4" sm="6" md="4">
        <v-card variant="text">
          <v-card-text class="d-flex mt-5">
            <v-btn
              icon="mdi-chart-timeline"
              color="black"
              variant="tonal"
            ></v-btn>
            <div class="d-flex flex-column ml-5">
              <span>Efficiency</span>
              <p>
                <span class="text-h5 font-weight-bold">93%</span>
                <span class="text-success">
                  <v-icon icon="mdi-menu-down" /> +12%</span
                >
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-divider thickness="2"></v-divider>
    </v-row>
    <v-row class="px-12">
    <v-col cols="12">
      <v-card variant="text" class="d-flex flex-column">
        <v-card-title>Performance</v-card-title>
        <v-card-text class="flex-grow-1">
          <div id="chart" class="chart-container"></div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
    <v-row class="px-12">
      <v-col cols="12">
        <v-card variant="text">
          <v-card-title class="d-flex justify-space-between">
            <div class="d-flex">Current Tasks <v-divider  vertical thickness="3"  class="ml-2" length="40"></v-divider> <span class="ml-4 mt-2 text-caption">Done 30%</span></div>
            <v-select label="Week" :items="options" selected density="compact" variant="outlined" style="max-width: 109px;;"></v-select>
          </v-card-title>
          <v-card-text>
            <v-data-table :headers="headers" :items="tasks" hide-default-header hide-default-footer density="comfortable">
              <template v-slot:[`item.status`]="{ item }">
                <v-chip v-if="item.status == 'In progress'" color="orange"> {{ item.status }}</v-chip>
                <v-chip v-if="item.status == 'On hold'" color="blue"> {{ item.status }}</v-chip>
                <v-chip v-if="item.status == 'Done'" color="green"> {{ item.status }}</v-chip>
                
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import { defineComponent, onMounted } from 'vue';
import ApexCharts from 'apexcharts';

const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];

export default defineComponent({
  name: 'SalesChart',
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8],
    gradientDirection: "top",
    fill: false,
    type: "trend",
    autoLineWidth: false,
    headers: [
        {
          title: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        { title: 'Status', key: 'status', align: 'end' },
        { title: 'lastUpdated', key: 'lasthourupdated', align: 'end' },
        { title: 'Action', key: 'action', align: 'end' },
      ],
      options:["Week"],
      tasks: [
          {
            name: 'Rails API review',
            status: 'In progress',
            lasthourupdated: '4h',
            action: '...',
          },
          {
            name: 'UX Research for StylePos',
            status: 'On hold',
            lasthourupdated: '8h',
            action: '...',
          },
          {
            name: 'Redis & Sidekiq configuration in production env',
            status: 'Done',
            lasthourupdated: '8h',
            action: '...',
          },
        ],
  }),
  setup() {
    onMounted(() => {
      const options = {
        series: [{
          name: 'Sales',
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13,4,4,5,9]
        }],
        chart: {
          height: 270,
          type: 'line',
        },
        forecastDataPoints: {
          count: 10
        },
        stroke: {
          width: 5,
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
          tickAmount: 10,
          labels: {
            formatter: function(value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), 'dd MMM');
            }
          }
        },
        title: {
          align: 'left',
          style: {
            fontSize: "16px",
            color: '#666'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: ['#FDD835'], // Use selected gradient
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          }
        }
      };

      const chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
    });

    return {
    
    };
  }
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%; /* Ensure it fills the parent */
}
.v-card-text {
  padding: 0; /* Remove default padding for better fit */
}
</style>