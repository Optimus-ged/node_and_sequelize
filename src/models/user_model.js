// Import depedndancies
import { DataTypes } from "sequelize";
import database from "../config/database";

// defining user model
const user = database.define(
  "user",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

// Export model
export default user;
