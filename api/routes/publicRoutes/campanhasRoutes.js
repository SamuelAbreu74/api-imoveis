
const express = require('express');

const router = express.Router();
const campanhasControler = require('../../controllers/campanhasController');

// CRUD CAMPANHAS
router.get('/campanhas', campanhasControler.listarCampanhas);


module.exports = router;
