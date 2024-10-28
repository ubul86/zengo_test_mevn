const County = require('../models/county.model');

class CountyService {
    async getCounties() {
        const counties = await County.find();
        return counties.map( county => county.formatResponse());
    }

}

module.exports = new CountyService();
