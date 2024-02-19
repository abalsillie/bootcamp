// firstly, run schema.sql, then seeds.sql, will creates database 'classlist_db'
// SOURCE db/schema.sql; SOURCE db/seeds.sql
// exists within sql, won't show as file
// SHOW DATABASES; will show the classlist_db
// make use of mysql2 (defined in package.json)

const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection( // create db variable, mysql variable, 'create connection' function call
  {
    host: 'localhost', // server is local host
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'password', // don't typically save and push to git
    database: 'classlist_db' // connect to database, doesn't exist yet
  }, // object parametre
  console.log(`Connected to the classlist_db database.`) // call back
);

// Query database
db.query('SELECT * FROM students', function (err, results) { // first parametre is query, second is callback
  console.log(results); // will reflect what's shown in seeds.sql
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
