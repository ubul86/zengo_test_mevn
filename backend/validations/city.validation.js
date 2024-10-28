const { body } = require('express-validator');

const validateCity = [
    body('name')
        .trim()
        .notEmpty().withMessage('City name cannot be empty')
        .isLength({ max: 150 }).withMessage('City name cannot exceed 150 characters'),
    body('county_id')
        .notEmpty().withMessage('County is required')
];

module.exports = { validateCity };