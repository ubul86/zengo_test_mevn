import apiClient from './api.service';

export default {
    getByCounty(countyId) {
        return apiClient.get(`/city?countyId=${countyId}`).then(response => response.data.data);
    },
    create(city) {
        return apiClient.post('/city', city).then(response => response.data.data);
    },
    update(id, city) {
        return apiClient.put(`/city/${id}`, city).then(response => response.data.data);
    },
    delete(id) {
        return apiClient.delete(`/city/${id}`).then(response => response.data.data);
    },
};
