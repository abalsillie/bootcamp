const express = require('express');

const PORT = 3002;

const app = express();

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => { // get method
  // Your code here
  res.json('$(req.method) request received');
  console.log('$(req.method) request received');
});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
// Your code here
app.post('/api/reviews', (req, res) => {
  res.json('$(req.method) request received');
  console.log('$(req.method) request received');
})

// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
  res.json('$(req.method) request received');
  console.log('$(req.method) request received');
  // Your code here
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
app.post('/api/upvotes', (req, res) => {
  res.json('$(req.method) request received');
  console.log('$(req.method) request received');
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);

// don't put sensitive info in the URL
// CRUD = create, read, update, delete