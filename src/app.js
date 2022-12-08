const express = require('express');

const app = express();

app.use(express.json());

const stringsRoute = require('./routes/strings');

const numbersRoute = require('./routes/numbers');

const booleansRoute = require('./routes/booleans');

app.use('/strings', stringsRoute);

app.use('/numbers', numbersRoute);

app.use('/booleans', booleansRoute);

module.exports = app;

// NGROK EXPRESS API WHISPERER

// app.get('/secret', (_req, res) => {
//   res
//     .status(200)
//     .send(
//       '803dbe63c46f3db34d2cea373b0f4ff9941e6fc6ab5d046a2327cd6f1c578f12b0717c48d31834ffe5b64cacf5840594e5a82aafe3571b48aedafe42651f3b00db77000859b2bf7c0ff947b4595951b66e0cb745c39aed6e418c2e15c56c01214fe8d24a6b311bd59d9aec703685bb94bc62b853ad6d55a4694c1b5027e2d7ed6b6',
//     );
// });

// app.post('/success', (req, res) => {
//   res.send(req.body);
// });
// const port = 3000;

// app.listen(port);
