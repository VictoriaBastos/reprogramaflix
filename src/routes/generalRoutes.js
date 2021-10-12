const controller = require('../controller/generalController');

const express = require('express');
const route = express.Router();

route.get('/', controller.getAll)

module.exports = route;

