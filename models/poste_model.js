// Importing dependancies
import database from "../config/database";
import DataTypes from "sequelize";
import agent from "./agent_model";
// Building poste agent model
const poste = database.define(
  "poste",
  {
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

poste.hasMany(agent, {
  foreignKey: "id_poste",
  onDelete: "CASCADE",
});

agent.belongsTo(poste, {
  foreignKey: "id_poste",
  onDelete: "CASCADE",
});

// Exporting poste model
export default poste;
