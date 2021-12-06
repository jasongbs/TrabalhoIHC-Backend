const express = require('express');
const router = express.Router();

const OrcController = require('../controllers/orc-controller');

router.get('/', OrcController.getOrcamentos);
router.post('/', OrcController.postInsereOrcamentos);
module.exports = router;