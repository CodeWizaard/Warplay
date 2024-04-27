const express = require('express');
const app = express();
const port = 3000;


const newsDB = [
    { id: 1, title: 'Новость 1', content: 'Содержание новости 1' },
    { id: 2, title: 'Новость 2', content: 'Содержание новости 2' },
    { id: 3, title: 'Новость 3', content: 'Содержание новости 3' }
  ];

app.get('/', (req, res) => {
    res.send('Привет, мир!');
  });
app.get('/news', (req, res) => {
    res.json(newsDB);
  });

  app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
  });