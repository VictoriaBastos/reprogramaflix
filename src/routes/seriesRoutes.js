//series [GET] /series{id} [GET] /series{titulo} [GET] /series{genero} 

const controller = require('../controller/seriesController');

const express = require('express');
const route = express.Router();

route.get('/', controller.getSeries)
route.get('/buscar/:genre', controller.getSeriesByGenre) //não consegui direto na path raiz
route.get('/filtrar/:title', controller.getSeriesByTitle) // não consegui direto na path raiz
route.get('/:id', controller.getSeriesById) // path params só está me permitindo criar uma busca direto na raiz



module.exports = route;