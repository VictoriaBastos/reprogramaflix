const controller = require('../controller/moviesController');

const express = require('express');
const route = express.Router();

route.get('/', controller.getMovies);

route.get('/buscar/:id', controller.getMoviesById)

module.exports = route;