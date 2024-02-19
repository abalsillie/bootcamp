// npm install
const express = require('express');
const mysql = require('mysql2'); // connects/ imports mysql2

const PORT = process.env.PORT || 3001; // port name defined
const app = express(); // initialising express

app.use(express.urlencoded({ extended: false })); // express middleware
app.use(express.json());

const db = mysql.createConnection( // storing entire connection into db variable
  {
    host: 'localhost', // local host is inside desktop
    user: 'root', // username
    password: '', // password
    database: 'classlist_db' // name of database being created, must specify
  }, // object to connect to database
  console.log(`Connected to the classlist_db database.`)
);

db.query('SELECT * FROM students', function (err, results) { // passing query
  console.log(results);
});

// server side error, default response for anything else
app.use((req, res) => {
  res.status(404).end(); 
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
