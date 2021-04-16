import { DataTypes } from "sequelize";
import database from "../config/database";

const poste = database.define(
    "poste",
    {
        designation : {
            type : DataTypes.STRING,
            allowNull : false
        }
    },
    {
        freezeTableName : true,
        timeStamps : false
    }
);

export default poste