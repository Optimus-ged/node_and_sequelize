// Importing dependancies
import database from "../config/database";

// Building agent model
const agent = database.define(
  "agent",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
      type: DataTypes.DATETIME,
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

// Referrences and other modules
agent.belongsTo(poste, {
  foreignKey: "idPoste",
});

// Exporting module
export default agent;
