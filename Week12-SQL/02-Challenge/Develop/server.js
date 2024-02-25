const express = require('express'); // require express.js
const mysql = require('mysql2'); // import and require mysql2

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root', // mysql username
    password: 'password123', // mysql password
    database: 'staff_db'
  },
  console.log(`Successfully connected to the staff database!`)
);

// options to view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role


// view all departments SHOWS department names and department ids
app.get('/api/departments', (req, res) => {
  const sql = `SELECT * FROM departments`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// view all roles
app.get('/api/roles', (req, res) => {
  const sql = `SELECT * FROM roles`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// view all employees
app.get('/api/employees', (req, res) => {
  const sql =
  `SELECT * FROM employees a
  INNER JOIN employees b
  ON a.manager_id = b.id
  INNER JOIN roles c
  ON b.role_id = c.id
  INNER JOIN departments d
  ON c.department_id = d.id;`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// add a department PROMPTS to enter the name of the department and that department is added to the database
// add a role PROMPTS to enter the name, salary, and department for the role and that role is added to the database
// add an employee PROMPTS to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
app.post('/api/new-movie', ({ body }, res) => {
  const sql = `INSERT INTO movies (movie_name)
    VALUES (?)`;
  const params = [body.movie_name];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
});

// update an employee role PROMPTS to select an employee to update and their new role and this information is updated in the database 
app.put('/api/review/:id', (req, res) => {
  const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
  const params = [req.body.review, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Movie not found'
      });
    } else {
      res.json({
        message: 'success',
        data: req.body,
        changes: result.affectedRows
      });
    }
  });
});

// response for any other request
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
