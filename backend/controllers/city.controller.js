const cityService = require('../services/city.service');

const { formatCityResponse } = require('../utils/formatResponse');

const getAllCities = async (req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        res.status(200).json({ message: 'Cities retrieved successfully', data: cities.map(city => formatCityResponse(city)) });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getCityById = async (req, res) => {
    try {
        const city = await cityService.getCityById(req.params.id);
        if (!city) {
            return res.status(404).json({ message: 'City not found' });
        }
        res.status(200).json({ message: 'City retrieved successfully', data: formatCityResponse(city) });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const createCity = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        res.status(201).json({ message: 'City created successfully', data: formatCityResponse(city) });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateCity = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        if (!city) {
            return res.status(404).json({ message: 'City not found' });
        }
        res.status(200).json({ message: 'City updated successfully', data: formatCityResponse(city) });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteCity = async (req, res) => {
    try {
        const city = await cityService.deleteCity(req.params.id);
        if (!city) {
            return res.status(404).json({ message: 'City not found' });
        }
        res.status(200).json({ message: 'City deleted successfully', data: formatCityResponse(city) });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


module.exports = { getAllCities, getCityById, createCity, updateCity, deleteCity };