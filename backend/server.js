require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Подключение к MongoDB успешно установлено'))
  .catch((err) => console.error('Ошибка подключения к MongoDB:', err));
const db = mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.log('Connected to databace'));

app.use(cors({
  origin: '*'
}));
app.use(express.json());
const newsRouter = require('./routes/news');
app.use('/news', newsRouter);
const serversRouter = require('./routes/servers');
app.use('/servers', serversRouter);

// Запускаем сервер
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
