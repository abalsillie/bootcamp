const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

// storing database
const connectionStringURI = `mongodb://127.0.0.1:27017`;

// create new instance of client
const client = new MongoClient(connectionStringURI);

// db variable
let db;

// name of db
const dbName = 'inventoryDB';

// connecting to db, in server
client.connect()
  // async operation
  .then(() => {
    console.log('Connected successfully to MongoDB');
    // connecting to db instance
    db = client.db(dbName);

    // starting server
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  // error incase can't connect
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

app.use(express.json());

app.post('/create', (req, res) => {
  db.collection('bookCollection').insertOne(
    { title: req.body.title, author: req.body.author }
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

app.post('/create-many', (req, res) => {
  db.collection('bookCollection').insertMany(
    [
      { "title": "Oh the Places We Will Go!" },
      { "title": "Diary of Anne Frank" }
    ]
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

app.get('/read', (req, res) => {
  db.collection('bookCollection')
    .find({})
    .toArray()
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});
