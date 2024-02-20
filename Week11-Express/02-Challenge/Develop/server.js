const express = require('express'); // import express.js
const html_routes = require('./routes/html-routes.js') // require html-routes.js file
const api_routes = require('./routes/api-routes.js') // require api-routes.js file
const PORT = process.env.PORT || 3001; // specify on which port the express.js server will run

const app = express(); // initialise instance of express.js

// express middleware operations for parsing json and urlencoded data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public")); // static middleware pointing to the public folder
app.use(html_routes)
app.use(api_routes)

// listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
