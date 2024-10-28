import { defineStore } from 'pinia';
import cityService from '../services/city.service.js';

export const useCityStore = defineStore('city', {
    state: () => ({
        cities: [],
    }),
    actions: {
        async fetchCities(countyId) {
            try {
                this.cities = await cityService.getByCounty(countyId);
            } catch (error) {
                console.error('Error in fetching cities:', error);
            }
        },
        async addCity(name, county_id) {
            try {
                const newCity = await cityService.create({ name, county_id });
                this.cities.push(newCity);
            } catch (error) {
                console.error('Error when adding new city:', error);
            }
        },
        async updateCity(id, name) {
            try {
                await cityService.update(id, { name });
                const city = this.cities.find(city => city.id === id);
                if (city) {
                    city.name = name;
                }
            } catch (error) {
                console.error('Error when modify the City:', error);
            }
        },
        async deleteCity(id) {
            try {
                await cityService.delete(id);
                this.cities = this.cities.filter(city => city.id !== id);
            } catch (error) {
                console.error('Error when delete a City:', error);
            }
        },
    },
});
