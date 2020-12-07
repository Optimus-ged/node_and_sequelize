// Comments
// Import dependencies
import Sequelize from 'sequelize';
import database from '../config/database';

// Comment
// profuct model
const product = database.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
}, { 
    timestamps: false,
    freezeTableName : true
});

// Comment
// Exporting model
export default product;