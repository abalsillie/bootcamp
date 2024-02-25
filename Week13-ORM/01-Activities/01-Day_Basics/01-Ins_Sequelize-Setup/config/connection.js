const Sequelize = require('sequelize'); // require from sequelize

// Create a connection object
const sequelize = new Sequelize(
  // Database name
  'library_db',
  // User
  'root',
  // Password
  'myPassword',
  {
    // Object with information about the database
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
