const express = require('express'); // require express
const html_routes = require('./html.js') // require html.js file
const api_routes = require('./api.js') // require api.js file
const PORT = process.env.PORT || 3001; // set the port to 3001

const app = express();

// Express middleware will always run the operation in the order from top to bottom "order matters"
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(html_routes)
app.use(api_routes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});