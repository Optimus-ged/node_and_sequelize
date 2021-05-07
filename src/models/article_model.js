// Importing depedancies
import database from "../config/database";
import { DataTypes } from "sequelize";

// Defining article model
const article = database.define(
  "article",
  {
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pu: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    a_propos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

// Exporting module
export default article;
