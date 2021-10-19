const controller = require('../controller/moviesController');

const express = require('express');
const router = express.Router();

router.get('/', controller.getMovies);

router.get('/buscar/:id', controller.getMovieById);

router.get('/buscar', controller.getMovieByTitle);

router.get('/filtrar', controller.getMoviesByGenre);

router.post('/criar', controller.createMovie);

router.patch('/update', controller.updateTitle);

router.patch('/update/:id' , controller.updateAnything);

router.put('/update/:id', controller.updateMovie);

router.delete('/deletar/:id', controller.deleteMovie);

module.exports = router;