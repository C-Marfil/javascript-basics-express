const express = require('express');

const numbersController = require('../controllers/numbers');

const numbersRoute = express.Router();

numbersRoute.get('/add/:a/and/:b', numbersController.adding);

numbersRoute.get('/subtract/:n1/from/:n2', numbersController.subtracting);

numbersRoute.post('/multiply', numbersController.multiplying);

numbersRoute.post('/divide', numbersController.dividing);

numbersRoute.post('/remainder', numbersController.remaining);

module.exports = numbersRoute;
