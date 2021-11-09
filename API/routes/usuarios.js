const express = require('express');
const router = express.Router();

const UserController = require('../controllers/usuarios-controller');


router.get('/',UserController.getUsuarios);

module.exports = router;