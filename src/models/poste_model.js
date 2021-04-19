import database from "../config/database";
// import agent from "../models/agent_model";
import { DataTypes } from "sequelize";

const poste = database.define(
    "poste",
    {
        designation : {
            type : DataTypes.STRING,
            allowNull : false
        }
    },
    {
        timestamps : false,
        freezeTableName : true
    }
);

// // Adding all references
// poste.hasMany(agent,{
//     foreignKey : "poste_id",
//     onDelete : "CASCADE",
//     onUpdate : "CASCADE"
// });

// agent.belongsTo(poste, {
//   foreignKey: "poste_id",
//   onDelete : "CASCADE",
//   onUpdate : "CASCADE"
// });

export default poste;