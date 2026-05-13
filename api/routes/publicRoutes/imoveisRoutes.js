const express = require('express')
const router = express.Router();
const imoveisController = require('../../controllers/imoveisController');


// CRUD IMOVEIS
router.get('/imoveis', imoveisController.listarImoveis);

module.exports = router;