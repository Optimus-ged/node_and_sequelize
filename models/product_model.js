// Comment
// Importing dependancies
import Sequelize from 'sequelize';
import Database from '../config/database';

// Comment
// Defining modal
const Product = Database.define(
  "product",
  {
    name : {
      type : Sequelize.STRING,
      allowNull : false
    },
    price : {
      type : Sequelize.FLOAT,
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
export default Product;