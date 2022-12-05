const { sayHello, uppercase } = require('../lib/strings');

const hello = (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
};

const upper = (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
};

module.exports = {
  hello,
  upper,
};
