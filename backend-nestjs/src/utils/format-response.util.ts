export const formatCityResponse = (city: any) => {
    return {
        id: city._id,
        name: city.name,
        county_id: city.county ? city.county._id : null,
        county_name: city.county ? city.county.name : null,
    };
}

export const formatCountyResponse = (county: any) => {
    return {
        id: county._id,
        name: county.name,
        cities: county.cities ? county.cities.map((city) => city.name) : []
    };
};