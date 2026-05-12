
const express = require('express');

const router = express.Router();
const campanhasControler = require('../controllers/campanhasController');

// CRUD CAMPANHAS
router.get('/campanhas', campanhasControler.listarCampanhas);
router.post('/campanhas', campanhasControler.criarCampanha);
router.put('/campanhas/:id', campanhasControler.editarCampanha);
router.delete('/campanhas/:id', campanhasControler.deletarCampanha);

module.exports = router;
