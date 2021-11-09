const express = require('express');
const router = express.Router();

const ProdController = require('../controllers/prod-controller');

router.get('/', ProdController.getProdutos);

module.exports = router;