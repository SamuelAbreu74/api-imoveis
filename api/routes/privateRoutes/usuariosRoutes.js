const express = require('express')
const router = express.Router();
const usuariosController = require('../../controllers/usuariosControler');


// CRUD USUARIOS
router.get('/usuarios', usuariosController.listarUsuarios);
router.post('/usuarios', usuariosController.criarUsuario);
router.put('/usuarios/:id', usuariosController.editarUsuario);
router.delete('/usuarios/:id', usuariosController.deletarUsuario);

module.exports = router;