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

};

// Exporting module
export default articleCtrl;
