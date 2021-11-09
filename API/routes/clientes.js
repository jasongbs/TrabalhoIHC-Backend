const express = require('express');
const router = express.Router();

const ClienteController = require('../controllers/clientes-controller');

router.get('/', ClienteController.getClientes);

module.exports = router;