<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="4">
        <CountySelect />
        <CityForm v-if="selectedCounty"/>
      </v-col>
      <v-col cols="12" md="8">
        <CityList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

import CityForm from "./components/CityForm.vue";
import CountySelect from "./components/CountySelect.vue";
import CityList from "./components/CityList.vue";

import { computed } from 'vue';

import { useCountyStore } from './stores/county.store.js';

const countyStore = useCountyStore();

const selectedCounty = computed(() => countyStore.selectedCounty);

</script>