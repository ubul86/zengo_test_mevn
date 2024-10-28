const express = require('express');
const {getAllCities, getCityById, createCity, updateCity, deleteCity} = require("../controllers/city.controller");
const { } = require('../controllers/city.controller');

const router = express.Router();

router.get('/', getAllCities);
router.get('/:id', getCityById);
router.post('/', createCity);
router.put('/:id', updateCity);
router.delete('/:id', deleteCity);

module.exports = router;