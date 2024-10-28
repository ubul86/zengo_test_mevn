const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    county: { type: mongoose.Schema.Types.ObjectId, ref: 'County', required: true },
    name: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('City', CitySchema);
