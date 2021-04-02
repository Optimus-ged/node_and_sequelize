// Import dependencies
import Sequelize from "sequelize";
import database from "../config/database";

// profuct model
const product = database.define(
  "product",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

// Exporting model
export default product;
