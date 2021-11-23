const express = require('express');
const router = express.Router();

const ProdController = require('../controllers/prod-controller');

router.get('/', ProdController.getProdutos);

router.post('/', ProdController.postProduto);

router.patch('/', ProdController.patchProduto);

module.exports = router;