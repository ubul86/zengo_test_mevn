import { defineStore } from 'pinia';
import countyService from '../services/county.service.js';

export const useCountyStore = defineStore('county', {
    state: () => ({
        counties: [],
        selectedCounty: null,
    }),
    actions: {
        async fetchCounties() {
            try {
                this.counties = await countyService.getAll();
            } catch (error) {
                console.error('Error fetching Counties:', error);
            }
        },
        selectCounty(county) {
            this.selectedCounty = county;
        },
    },
});
