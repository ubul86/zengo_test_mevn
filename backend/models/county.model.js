const mongoose = require('mongoose');

const CountySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
});


CountySchema.methods.formatResponse = function() {
    return {
        id: this._id,
        name: this.name,
    };
};

module.exports = mongoose.model('County', CountySchema);