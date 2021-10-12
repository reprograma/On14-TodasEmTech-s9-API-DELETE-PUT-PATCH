const controller = require('../controllers/filmesController.js');

const express = require('express');

// método do express para criar diversas rotas.
const router = express.Router();

// APP NÃO VAI MAIS SER USADO
// router.verbohttp (rota, controller.funcao)
router.get('/catalogo', controller.getAll)
router.get('/', controller.getMovies) //tirei /filmes
router.get('/:id', controller.getMovieById)
router.get('/', controller.getMovieByTitle)//tirei/filmes
router.post('/', controller.createMovie)



// o método router permite que o router salvez todas as rotas dentro da variável router e exporte todo o código.
// exporta rotas para app.js
module.exports = router;