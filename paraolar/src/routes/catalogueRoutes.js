const controller = require('../controller/catalogueController');

const express = require('express');
const route = express.Router();

route.get('/', controller.getAll)

module.exports = route;

