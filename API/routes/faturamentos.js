const express = require('express');
const router = express.Router();

const FatuController = require('../controllers/fatu-controller');

router.get('/', FatuController.getFaturamentos);

module.exports = router;