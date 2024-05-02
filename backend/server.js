const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

mongoose.connect 
// Коннект к базе данных
const myFunction = require('.backend\db.js');

const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/warplay'; // URI подключения к вашей MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const Cat = mongoose.model('Cat', { name: String });




// Обработчик для маршрута /news
app.get('/news', (req, res) => {
    res.json(newsDB);
});

// Запускаем сервер
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
