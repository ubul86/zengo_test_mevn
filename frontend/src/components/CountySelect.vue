<template>
  <v-select
      v-model="selectedCounty"
      :items="counties"
      item-text="name"
      item-value="id"
      label="Choose a County"
      return-object
  />
</template>

<script setup>
import { ref, onMounted, computed, watch  } from 'vue';
import { useCountyStore } from '../stores/county.store.js';
import { useCityStore } from '../stores/city.store.js';

const countyStore = useCountyStore();
const cityStore = useCityStore();
const selectedCounty = ref(null);

onMounted(() => {
  countyStore.fetchCounties();
});

const counties = computed(() => countyStore.counties.map(county => ({
  ...county,
  title: county.name,
})));

watch(selectedCounty, (newValue) => {
  if (selectedCounty) {
    countyStore.selectCounty(selectedCounty.value);
    cityStore.fetchCities(selectedCounty.value.id);
  }
});

</script>