// Importing dependancies
import database from "../config/database";
import DataTypes from "sequelize";
import poste from "./poste_model";

// Building agent model
const agent = database.define(
  "agent",
  {
    id_poste: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateNaissance: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    sexe: {
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

// References and some other options
// agent.belongsTo(poste, {
//   foreignKey: "id_poste",
//   onDelete: "CASCADE",
// });
// poste.hasMany(agent, {
//   foreignKey: "id_poste",
//   onDelete: "CASCADE",
// });



// Exporting module
export default agent;
