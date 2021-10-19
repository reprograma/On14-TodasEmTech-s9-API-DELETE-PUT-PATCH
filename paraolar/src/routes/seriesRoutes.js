const controller = require('../controller/seriesController');

const express = require('express');
const router = express.Router();

router.get('/', controller.getSeries)

router.get('/:id', controller.getSeriesById)

router.post('/criar', controller.createSeries)

router.put('/update/:id', controller.updateSeries)

router.patch('/update', controller.updateTitle)

router.patch('/update/:id', controller.updateAnything)

router.delete('/deletar/:id', controller.deleteSeries)

module.exports = router;