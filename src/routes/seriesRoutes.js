const controller = require('../controller/seriesController');

const express = require('express');
const router = express.Router();

router.get('/', controller.getSeries)

// router.get('/buscar/:genre', controller.getSeriesByGenre) //não consegui direto na path raiz
// router.get('/filtrar/:title', controller.getSeriesByTitle) // não consegui direto na path raiz
router.get('/:id', controller.getSeriesById) // path params só está me permitindo criar uma busca direto na raiz

router.post('/criar', controller.createSeries)

router.put('/update/:id', controller.updateSeries)

router.delete('/deletar/:id', controller.deleteSeries)

// router.patch('/update/:id', controller.updateTitle)


module.exports = router;