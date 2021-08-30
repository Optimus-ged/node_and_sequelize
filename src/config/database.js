// Importing dependencies
import Sequelize from "sequelize";
import dotenv from "dotenv";

// Config environnment variables
dotenv.config();

// Making connection to the database
const database = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorAliases: false,
  }
);

// Exporting module
export default database;
