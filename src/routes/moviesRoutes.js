const controller = require('../controller/moviesController');

const express = require('express');
const router = express.Router();

router.get('/', controller.getMovies);

router.get('/filtrar', controller.getMoviesByGenre);

router.get('/buscar', controller.getMovieByTitle);

router.get('/buscar/:id', controller.getMovieById);

router.post('/criar', controller.createMovie);

router.patch('/update/:id', controller.updateTitle);

module.exports = router;