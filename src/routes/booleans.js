const express = require('express');

const booleansController = require('../controllers/booleans');

const booleansRoute = express.Router();

booleansRoute.post('/negate', booleansController.negating);

booleansRoute.post('/truthiness', booleansController.sayingTruth);

booleansRoute.get('/is-odd/:number', booleansController.odding);

booleansRoute.get('/:word/starts-with/:letter', booleansController.startingWith);

module.exports = booleansRoute;
