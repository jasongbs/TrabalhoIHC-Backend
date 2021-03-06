const express = require('express');
const router = express.Router();

const UserController = require('../controllers/usuarios-controller');


router.get('/',UserController.getUsuarios);
router.post('/',UserController.postInserUsuario);
router.post('/login',UserController.postLogin);

module.exports = router;