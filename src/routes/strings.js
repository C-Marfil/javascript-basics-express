const express = require('express');

const stringsController = require('../controllers/strings');

const stringsRoute = express.Router();

stringsRoute.get('/hello/:string', stringsController.hello);

stringsRoute.get('/upper/:string', stringsController.upper);

stringsRoute.get('/lower/:string', stringsController.lowerc);

stringsRoute.get('/first-characters/:string', stringsController.firstChars);

module.exports = stringsRoute;

const adding = (req, res) => {
  const num = parseInt(req.params.number, 10);
  const num1 = parseInt(req.params.number1, 10);

  res.status(200).json({ result: add(num, num1) });
};
