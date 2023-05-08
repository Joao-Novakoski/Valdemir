const Sequelize = require('sequelize');

require('dotenv').config();

const connection = new Sequelize(process.env.DATABASE_CONNECTION_URL);
// connection.sync();

module.exports = connection;