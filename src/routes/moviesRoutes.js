const controller = require('../controller/moviesController');

const express = require('express');
const route = express.Router();

route.get('/', controller.getMovies);

module.exports = route;