const { connect, connection } = require('mongoose'); // config connection to mongoose

const connectionString = 'mongodb://127.0.0.1:27017/socialMediaDB'; // plug to mongodb

connect(connectionString);

module.exports = connection; // export connection
