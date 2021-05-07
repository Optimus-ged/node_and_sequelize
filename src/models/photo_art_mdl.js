// Importing dependancies and others
import database from "../config/database";
import { DataTypes } from "sequelize";
import article from "../models/article_mdl"

// Defining the model
const photo_art = database.define(
  "photo_article",
  {
    photo_article: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_article: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

// Now defining all references
photo_art.belongsTo(article,{
    foreignKey : "id_article",
    onDelete : "CASCADE",
    onUpdate : "CASCADE"
})

article.hasMany(photo_art, {
  foreignKey: "id_article",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// Exporting module
export default photo_art;
