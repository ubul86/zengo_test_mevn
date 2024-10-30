const formatCityResponse = (city) => {
    return {
        id: this._id,
        name: this.name,
        county_id: this.county ? this.county._id : null,
        county_name: this.county ? this.county.name : null,
    };
}

const formatCountyResponse = (county) => {
    return {
        id: county._id,
        name: county.name,
        cities: county.cities.map(city => city.name)
    };
};

module.exports = {
    formatCityResponse,
    formatCountyResponse
};