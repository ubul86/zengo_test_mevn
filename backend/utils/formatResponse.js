const formatCityResponse = (city) => {
    return {
        id: city._id,
        name: city.name,
        county_id: city.county ? city.county._id : null,
        county_name: city.county ? city.county.name : null,
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