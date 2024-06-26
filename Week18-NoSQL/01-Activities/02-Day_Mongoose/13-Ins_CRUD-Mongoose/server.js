const express = require('express');
const db = require('./config/connection');
// Require model
const { Department } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CRUD operations- create, update, delete

// Creates a new department
app.post('/new-department/:department', (req, res) => {
  const newDepartment = new Department({ name: req.params.department }); // creates new const, name coming from department params
  newDepartment.save(); // saves in db
  if (newDepartment) {
    res.status(201).json(newDepartment);
  } else {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Finds all departments
app.get('/all-departments', async (req, res) => {
  try {
    // Using model in route to find all documents that are instances of that model
    const result = await Department.find({}); // find all departments
    res.status(200).json(result);
  } catch (err) {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Finds the first matching document
app.get('/find-wine-department', async (req, res) => {
  try {
    // Using model in route to find all documents that are instances of that model
    const result = await Department.findOne({ name: 'Wine' }); // find first instance for filter condition, pass in name 'Wine', will return first department with name of wine
    res.status(200).json(result);
  } catch (err) {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Finds first document matching parameter and deletes
// For demo, use 'Wine' as URL param
app.delete('/find-one-delete/:departmentName', async (req, res) => { 
  try {
    const result = await Department.findOneAndDelete({ name: req.params.departmentName }); // find the first instance and delete it, name coming from department params
    res.status(200).json(result);
    console.log(`Deleted: ${result}`);
  } catch (err) {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ error: 'Something went wrong' });
  }
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
