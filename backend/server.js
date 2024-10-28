const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const cityRoutes = require('./routes/city.routes');
const countyRoutes = require('./routes/county.routes');

const apiResponseMiddleware = require('./middlewares/apiResponse.middleware');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/api/city', cityRoutes);
app.use('/api/county', countyRoutes);

function errorHandler(err, req, res, next) {
    res.status(400).send({
        success: false,
        message: err.message || 'An error occurred',
        errors: err.errors || null,
    });
}

app.use(apiResponseMiddleware);
app.use(errorHandler);

console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Successfully connection to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });