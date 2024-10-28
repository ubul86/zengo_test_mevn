<template>
  <v-row>
    <v-col>
      Adjon meg új várost a megyébe:
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-form @submit.prevent="addCity">
        <v-text-field
            v-model="newCityName"
            label="Új város neve"
            required
        />
        <v-btn type="submit">Hozzáadás</v-btn>
      </v-form>
    </v-col>
  </v-row>

</template>

<script setup>
import { ref, computed } from 'vue';
import { useCityStore } from '../stores/city.store.js';
import { useCountyStore } from '../stores/county.store.js';

const cityStore = useCityStore();
const countyStore = useCountyStore();
const newCityName = ref('');

const selectedCounty = computed(() => countyStore.selectedCounty);

async function addCity() {
  if (!newCityName.value || !selectedCounty) {
    console.error('A megye vagy a város neve nincs kiválasztva!');
    return;
  }

  await cityStore.addCity(newCityName.value, selectedCounty.value.id);
  newCityName.value = '';
}
</script>

<style scoped>

</style>
