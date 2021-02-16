// Comment
// Importing dependancies
import Sequelize from 'sequelize';
import Database from '../config/database';

// Comment
// Defining user modal
const User = Database.define(
    "user",
    {
        email : {
            type : Sequelize.STRING,
            allowNull : false
        },
        password : {
            type : Sequelize.STRING,
            allowNull : false
        }
    },
    {
        timeStamp : false,
        freezeTableName : true
    }
);

// Comment
// Exporting module
export default User;