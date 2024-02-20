const router = require('express').Router(); // import express.js
const path = require('path'); // import node.js package 'path' to resolve path of server files

// GET * returns the `index.html` file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// GET /notes returns the `notes.html` file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// export
module.exports = router; 
