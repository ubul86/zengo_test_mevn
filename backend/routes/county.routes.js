const express = require('express');
const { getCounties } = require('../controllers/county.controller');

const router = express.Router();

router.get('/', getCounties);

module.exports = router;