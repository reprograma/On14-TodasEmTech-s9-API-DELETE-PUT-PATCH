const controller = require('../controllers/seriesController.js');

const express = require('express');
const router = express.Router();

router.get('/', controller.getAll)

module.exports = router;