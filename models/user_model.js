// Comment
// Import depedndancies
import Sequelize from 'sequelize';
import database from '../config/database';

// Comment
// defining user model
const user = database.define('user',{
    email : {
        type : Sequelize.STRING,
        allowNull : false
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    }
},{
    timestamps : false,
    freezeTableName : true
});

// Comment
// Export model
export default user;