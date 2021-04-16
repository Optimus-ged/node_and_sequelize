import database from "../config/database";
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

export default poste;