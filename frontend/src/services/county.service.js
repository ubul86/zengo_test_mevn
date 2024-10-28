import apiClient from './api.service';
export default {
    getAll() {
        return apiClient.get('/county').then(response => response.data.data.counties);
    },
};
