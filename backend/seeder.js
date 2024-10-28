const mongoose = require('mongoose');
const County = require('./models/county.model');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        seedData();
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

const seedData = async () => {
    try {
        await County.deleteMany();

        await County.create([
            { name: 'Csongrád-Csanád'},
            { name: 'Borsod' }
        ]);

        console.log('Data seeded successfully');
        process.exit();
    } catch (error) {
        console.error('Seeding error:', error);
        process.exit(1);
    }
};