const controller = require('../controller/seriesController');

const express = require('express');
const router = express.Router();

router.get('/', controller.getSeries)

// router.get('/:id', controller.getSeriesById) // path params só está me permitindo criar uma busca direto na raiz

// router.get('/genre', controller.getSeriesByGenre) //não consegui direto na path raiz //EXCLUIR DEPOIS
// router.get('/', controller.getSeriesByTitle) // não consegui direto na path raiz // EXCLUIR DEPOIS

router.post('/criar', controller.createSeries)

router.patch('/update', controller.updateTitle)

router.patch('/update/:id', controller.updateAnything)

router.put('/update/:id', controller.updateSeries)

router.delete('/deletar/:id', controller.deleteSeries)

// router.patch('/update/:id', controller.updateTitle)


module.exports = router;