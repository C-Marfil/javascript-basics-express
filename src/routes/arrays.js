const express = require('express');

const arraysController = require('../controllers/arrays');

const arraysRoute = express.Router();

arraysRoute.post('/element-at-index/:position', arraysController.gettingNth);

arraysRoute.post('/to-string', arraysController.stringify);

arraysRoute.post('/append', arraysController.appending);

arraysRoute.post('/starts-with-vowel', arraysController.startingWithVowel);

arraysRoute.post('/remove-element', arraysController.removingNth);

module.exports = arraysRoute;
