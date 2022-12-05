const app = require('../app.js');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
  countCharacters,
} = require('../lib/strings.js');

app.get('/strings/hello/world', (_req, res) => {
  res.sendStatus(200);
  res.send('Hello, world');
});
