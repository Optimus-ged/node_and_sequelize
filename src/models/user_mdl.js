// Import depedndancies
import { DataTypes } from "sequelize";
import database from "../config/database";

// defining user model
const user = database.define(
  "user",
  {
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mot_de_passe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
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
