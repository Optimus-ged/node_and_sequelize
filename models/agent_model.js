// Importing depedancies and other modules
import { DataTypes } from "sequelize";
import database from "../config/database";

// Building agent model
const agent = database.define(
  "agent",
  {
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postnom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sexe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_naissance : {
        type : DataTypes.DATE,
        allowNull : false
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default agent;