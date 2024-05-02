const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017'; // URI подключения к вашей MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

