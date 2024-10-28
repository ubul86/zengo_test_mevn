const County = require('../models/county.model');

class CountyService {
    async getCounties() {
        const counties = await County.find();
        return counties;
    }

}

module.exports = new CountyService();
