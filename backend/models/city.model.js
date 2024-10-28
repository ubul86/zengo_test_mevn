const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    county: { type: mongoose.Schema.Types.ObjectId, ref: 'County', required: true },
    name: { type: String, required: true, unique: true },
});

CitySchema.methods.formatResponse = function() {
    return {
        id: this._id,
        name: this.name,
        county_id: this.county ? this.county._id : null,
        county_name: this.county ? this.county.name : null,
    };
};

module.exports = mongoose.model('City', CitySchema);
