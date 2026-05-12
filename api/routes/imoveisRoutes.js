const express = require('express')
const router = express.Router();
const imoveisController = require('../controllers/imoveisController');


// CRUD IMOVEIS
router.get('/imoveis', imoveisController.listarImoveis);
router.post('/imoveis', imoveisController.criarImovel);
router.put('/imoveis/:id', imoveisController.editarImovel);
router.delete('/imoveis/:id', imoveisController.deletarImovel);

module.exports = router;