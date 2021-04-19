// Importing depedancies and other modules
import { DataTypes } from "sequelize";
import database from "../config/database";
import poste from "../models/poste_model";

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
    date_naissance: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    poste_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

// Adding all references
agent.belongsTo(poste, {
  foreignKey: "poste_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

poste.hasMany(agent,{
    foreignKey : "poste_id",
    onDelete : "CASCADE",
    onUpdate : "CASCADE"
});


export default agent;
