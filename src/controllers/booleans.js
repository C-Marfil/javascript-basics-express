const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

const negating = (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
};

const sayingTruth = (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
};

const odding = (req, res) => {
  if (Number.isNaN(parseInt(req.params.number, 10))) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: isOdd(req.params.number) });
  }
};

const startingWith = (req, res) => {
  const char = req.params.letter;
  const string = req.params.word;

  if (char.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.status(200).json({ result: startsWith(char, string) });
  }
};

module.exports = { negating, sayingTruth, odding, startingWith };
