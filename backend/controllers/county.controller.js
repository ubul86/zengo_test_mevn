const countyService = require('../services/county.service');
const getCounties = async (req, res) => {

    try {
        const counties = await countyService.getCounties();
        res.status(200).json({ message: 'County request is successful', data: { counties } });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getCounties };