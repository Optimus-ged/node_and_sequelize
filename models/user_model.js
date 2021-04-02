// Import depedndancies
import Sequelize from "sequelize";
import database from "../config/database";

// defining user model
const user = database.define(
  "user",
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
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
