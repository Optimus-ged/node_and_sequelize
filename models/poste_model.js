// Importing dependancies
import database from "../config/database";
import DataTypes from "sequelize";
import agent from "./agent_model";

// Building poste agent model
const poste = database.define(
  "poste",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

// References and some other options
poste.hasOne(agent, {
  foreignKey: "poste_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// Exporting poste model
export default poste;
