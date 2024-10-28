const City = require('../models/city.model');

class CityService {
    async getAllCities(query) {

        const filter = {};

        if (query.countyId) {
            filter.county = query.countyId;
        }

        return await City.find(filter).populate('county', 'name');

    }

    async getCityById(id) {
        return await City.findById(id).populate('county', 'name');
    }

    async createCity(cityData) {

        const {name, county_id} = cityData;

        const city = new City({
            name,
            county: county_id,
        });

        return await city.save();
    }

    async updateCity(id, cityData) {
        return await City.findByIdAndUpdate(id, cityData, { new: true });
    }

    async deleteCity(id) {
        return await City.findByIdAndDelete(id);
    }
}

module.exports = new CityService();