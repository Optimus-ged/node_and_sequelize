// Import model
import Poste from "../models/poste_model";
import agent from "../models/agent_model";

// Building components for all operations
const posteController = {
  // Getting all data from poste table
  getPosts: async (req, res) => {
    let response = await Poste.findAll({
      include: agent,
    });
    res.status(200).json({
      message: "All postes success getted",
      response: response,
    });
  },
};

// Exporting module
export default posteController;
