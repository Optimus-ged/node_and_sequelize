// Import dependencies
import { DataTypes } from "sequelize";
import database from "../config/database";

// profuct model
const product = database.define(
  "product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
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
