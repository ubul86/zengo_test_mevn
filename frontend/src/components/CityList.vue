<template>
  <div v-if="!selectedCounty">
    Nincs kiválasztva megye!
  </div>
  <div v-else-if="cities.length">
    <v-row>
      <v-col>
        Cities list:
      </v-col>
    </v-row>
    <v-list>
      <CityItem
          v-for="city in cities"
          :key="city._id"
          :city="city"
          :isEditing="editingCityId === city._id"
          @editCity="editCity"
          @updateCity="updateCity"
          @deleteCity="deleteCity"
          @cancelEdit="cancelEdit"
      />
    </v-list>
  </div>
  <div v-else>
    <p>There are not cities in this County!</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import CityItem from '../components/CityItem.vue';
import { useCityStore } from '../stores/city.store.js';
import { useCountyStore } from "../stores/county.store.js";

const cityStore = useCityStore();
const countyStore = useCountyStore();

const editingCityId = ref(null);

const cities = computed(() => cityStore.cities);
const selectedCounty = computed(() => countyStore.selectedCounty);

function editCity(id) {
  editingCityId.value = id;
}

function cancelEdit() {
  editingCityId.value = null;
}

async function updateCity(id, newName) {
  await cityStore.updateCity(id, newName);
  cancelEdit();
}

async function deleteCity(id) {
  await cityStore.deleteCity(id);
}
</script>