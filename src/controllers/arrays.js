const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

const gettingNth = (req, res) => {
  const index = parseInt(req.params.position, 10);
  const list = req.body.array;

  res.status(200).json({ result: getNthElement(index, list) });
};

const stringify = (req, res) => {
  const list = req.body.array;

  res.status(200).json({ result: arrayToCSVString(list) });
};

const appending = (req, res) => {
  const toAdd = req.body.value;
  const list = req.body.array;

  res.status(200).json({ result: addToArray2(toAdd, list) });
};

const startingWithVowel = (req, res) => {
  const list = req.body.array;
  res.status(200).json({ result: elementsStartingWithAVowel(list) });
};

const removingNth = (req, res) => {
  const index = parseInt(req.query.index, 10);
  const list = req.body.array;

  res.status(200).json({ result: removeNthElement2(index, list) });
};

module.exports = { gettingNth, stringify, appending, startingWithVowel, removingNth };
