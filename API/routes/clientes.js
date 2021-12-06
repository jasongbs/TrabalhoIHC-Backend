const express = require('express');
const router = express.Router();

const ClienteController = require('../controllers/clientes-controller');

router.get('/', ClienteController.getClientes);

router.post('/', ClienteController.postInsereClientes);
router.patch('/', ClienteController.patchCliente);
router.patch('/desativado', ClienteController.patchClienteDesativado);
router.patch('/excluido', ClienteController.patchClienteExcluido);
module.exports = router;