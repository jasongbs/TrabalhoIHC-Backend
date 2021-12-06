const express = require('express');
const router = express.Router();

const FatuController = require('../controllers/fatu-controller');

router.get('/', FatuController.getFaturamentos);
router.get('/:tipo', FatuController.getFaturamentosFiltro);
//router.get('/CR', FatuController.getFaturamentosCR);
router.post('/CP', FatuController.postCriaContaAPagar);
router.post('/CR', FatuController.postCriaContaAReceber);

router.patch('/', FatuController.patchEdiarConta);
router.patch('/Excluir/', FatuController.patchExluirCriaConta);
module.exports = router;