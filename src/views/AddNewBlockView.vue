<template>
  <div class="blocks">
    <v-row>
      <v-col cols="12">
        <div class="d-flex justify-space-between">
          <div class="d-flex flex-column">
            <span class="text-h5 font-weight-light">Block Management</span>
            <span class="font-weight-light"><v-icon icon="mdi-home-outline" size="x-small" color="blue"></v-icon>
              /
              <v-icon icon="mdi-domain" size="x-small" color="blue"></v-icon>
              <RouterLink class="text-decoration-none text-blue" to="/blocks">Manage Blocks</RouterLink>
              <v-icon icon="mdi-plus-thick" size="x-small"></v-icon>Add Block
            </span>
          </div>
        </div>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h6 font-weight-light d-flex justify-space-between">Add New Block <v-icon
              icon="mdi-focus-field-horizontal" size="small"></v-icon></v-card-title>
          <v-card-subtitle>Enter details belows to add a new block</v-card-subtitle>
          <v-card-text>
            <v-row dense>
              <v-col cols="6">
                <div class="d-flex flex-column">
                  <span>Block Name <span class="text-red">*</span> </span>
                  <v-text-field class="mt-3" variant="outlined" label="Block Name" density="compact"></v-text-field>
                </div>
              </v-col>

              <v-col cols="6">
                <div class="d-flex flex-column">
                  <span>Parent Block <span class="text-red">*</span> </span>
                  <v-autocomplete chips clearable class="mt-3" variant="outlined" label="Block Name" density="compact"
                    :items="parentBlocks"></v-autocomplete>
                </div>
              </v-col>

              <v-col cols="6">
                <div class="d-flex flex-column">
                  <span>Station <span class="text-red">*</span> </span>
                  <v-autocomplete chips clearable class="mt-3" variant="outlined" label="Block Name" density="compact"
                    :items="taxOffices" item-title="OfficeName" item-value="OfficeCode"></v-autocomplete>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn color="blue" class="mr-2 mb-4 text-capitalize" variant="elevated">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const parentBlocks = [
  "Limbe 1",
  "Limbe 2",
  "Blantyre",
  "Lilongwe",
  "Bwalo La Njovu",
  "City Centre",
  "AHL Area",
  "Mataifa",
];

const taxOffices = [
  { OfficeCode: "BLA", OfficeName: "Blantyre STO" },
  { OfficeCode: "BLK", OfficeName: "Balaka" },
  { OfficeCode: "CDE", OfficeName: "Chiponde" },
  { OfficeCode: "CTA", OfficeName: "Chitipa" },
  { OfficeCode: "DWA", OfficeName: "Dwangwa" },
  { OfficeCode: "DZ", OfficeName: "Dedza" },
  { OfficeCode: "HDO", OfficeName: "DTD Head Office" },
  { OfficeCode: "KAR", OfficeName: "Karonga" },
  { OfficeCode: "KU", OfficeName: "Kasungu" },
  { OfficeCode: "LIL", OfficeName: "Lilongwe" },
  { OfficeCode: "LIW", OfficeName: "Liwonde" },
  { OfficeCode: "LTO", OfficeName: "LTO" },
  { OfficeCode: "MAN", OfficeName: "Mangochi" },
  { OfficeCode: "MCH", OfficeName: "Mchinji" },
  { OfficeCode: "MLZ", OfficeName: "Muloza" },
  { OfficeCode: "MTO", OfficeName: "MTO" },
  { OfficeCode: "MTO-BLA", OfficeName: "MTO - Blantyre" },
  { OfficeCode: "MTO-LIL", OfficeName: "MTO - Lilongwe" },
  { OfficeCode: "MTO-MZU", OfficeName: "MTO - Mzuzu" },
  { OfficeCode: "MUL", OfficeName: "Mulanje" },
  { OfficeCode: "MWA", OfficeName: "Mwanza" },
  { OfficeCode: "MZI", OfficeName: "Mzimba" },
  { OfficeCode: "MZU", OfficeName: "Mzuzu" },
  { OfficeCode: "NSJ", OfficeName: "Nsanje" },
  { OfficeCode: "SAL", OfficeName: "Salima" },
  { OfficeCode: "ZA", OfficeName: "Zomba" },
];
</script>

<style scoped></style>
