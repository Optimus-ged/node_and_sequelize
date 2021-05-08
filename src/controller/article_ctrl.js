// Importing dependancies
import Article from "../models/article_mdl";

const articleCtrl = {
  // Getting all agents
  getAgents: async (req, res) => {
    let response = await Article.findAll().catch((err) => console.error(err));
    if (response) {
      return res.status(200).json({
        status: 200,
        length: response.length,
        response: response,
      });
    }
  },

  // Adding articles in the database
  addArticles: async (req, res) => {
    // let data = {
    //   designation: req.body.designation,
    //   pu: req.body.pu,
    //   a_propos: req.body.a_propos,
    // };

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
