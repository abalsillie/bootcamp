const router = require('express').Router(); // import express.js
const { v4: uuidv4 } = require('uuid'); // generating unique ids for each note
const fs = require ("fs"); // require fs

// GET /api/notes reads the `db.json` file and returns all saved notes as JSON
router.get('/api/notes', async (req, res) => {
  const dbJson = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
  res.json(dbJson); // send to the client
});

// POST /api/notes receives a new note to save and add to the `db.json` file
router.post('/api/notes', (req, res) => {
  const dbJson = JSON.parse(fs.readFileSync("db/db.json","utf8"));
  const newFeedback = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(), // generates unique ids for each note
  }; // object containing title, text and unique id of the note
  dbJson.push(newFeedback); // returns the new note to the client
  fs.writeFileSync("db/db.json",JSON.stringify(dbJson));
  res.json(dbJson);
});

// export
module.exports = router; 
