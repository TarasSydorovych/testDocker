const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/data', (req, res) => {
  const data = 'Це рядок даних, який сервер повертає';
  res.send(data);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});