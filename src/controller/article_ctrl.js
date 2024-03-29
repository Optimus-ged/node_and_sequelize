// Importing dependancies
import Article from "../models/article_mdl";
import photoArt from "../models/photo_art_mdl";

const articleCtrl = {
  // Getting all articles
  getArticles: async (req, res) => {
    let response = await Article.findAll({
      include: photoArt,
    }).catch((err) => console.error(err));
    if (response) {
      return res.status(200).json({
        status: 200,
        message: "All article getted successfully",
        length: response.length,
        response: response,
      });
    }
  },

  // Getting one article
  getArticle: async (req, res) => {
    let id = isNaN(parseInt(req.params.id)) ? 0 : parseInt(req.params.id);
    let response = await Article.findOne({
      where: id,
      include: photoArt,
    }).catch((err) => console.error(err));
    if (response) {
      return res.status(200).json({
        status: 200,
        message: "The article is getted successfully",
        response: response,
      });
    }
  },

  // Adding articles in the database
  addArticles: async (req, res) => {
    let response = await Article.create({
      designation: req.body.designation,
      pu: req.body.pu,
      a_propos: req.body.a_propos,
    }).catch((err) => console.error(err));

    if (response) {
      return res.status(201).json({
        status: 201,
        message: "Article created successfully",
        response: response,
      });
    }
  },
};

// Exporting module
export default articleCtrl;
