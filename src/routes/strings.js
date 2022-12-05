const express = require('express');

const stringsController = require('../controllers/strings');

const stringsRoute = express.Router();

stringsRoute.get('/hello/:string', stringsController.hello);

stringsRoute.get('/upper/:string', stringsController.upper);

module.exports = stringsRoute;
