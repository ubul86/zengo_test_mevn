const mongoose = require('mongoose');

const CountySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('County', CountySchema);