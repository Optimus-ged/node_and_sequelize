// Comments
// Importing dependencies
import Sequelize from 'sequelize';
import dotenv from 'dotenv';

// Comment
// Config environnment variables
dotenv.config();

// Comment
// Making connection to the database
const database = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorAliases: false
});

// Comment
// Testting connection
database.authenticate()
    .then(() => console.log('Connection Ok'))
    .catch(err => {
        error: {
            message: err
        }
    });

// Comment
// Exporting module
export default database;
