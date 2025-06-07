const express = require('express');
const { criaCategoria, buscaCategorias } = require('../controllers/categorias')

const router = express.Router();

router.route('/')
  .post(criaCategoria)
  .get(buscaCategorias)
module.exports = router;