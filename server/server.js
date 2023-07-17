const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://185.230.88.166' }));
const dbData = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];

app.get('/data', (req, res) => {
  const userId = req.query.id;
console.log(req.query.id)
if (req.query.id === '1') {
  return res.send('db correct');
} else {
  return res.status(400).send('ID не знайдено в базі даних');
}

});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});