const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

const adding = (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(a, b) });
  }
};

const subtracting = (req, res) => {
  const n1 = parseInt(req.params.n2, 10);
  const n2 = parseInt(req.params.n1, 10);

  res.status(200).json({ result: subtract(n1, n2) });
};

const multiplying = (req, res) => {
  const n1 = req.body.a;
  const n2 = req.body.b;

  res.status(200).json({ result: multiply(n1, n2) });
};

const dividing = (req, res) => {
  const n1 = req.body.a;
  const n2 = req.body.b;

  res.status(200).json({ result: divide(n1, n2) });
};

const remaining = (req, res) => {
  const n1 = req.body.a;
  const n2 = req.body.b;

  if (n2 === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if ((!n1 || !n2) && n1 !== 0) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(n1, 10)) || Number.isNaN(parseInt(n2, 10))) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: remainder(n1, n2) });
  }
};

module.exports = {
  adding,
  subtracting,
  multiplying,
  dividing,
  remaining,
};
