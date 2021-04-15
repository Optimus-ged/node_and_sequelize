// Import model
import Poste from "../models/poste_model";

// Building components for all operations
const posteController = {
  // Getting all data from poste table
  getPosts: async (req, res) => {
    let response = await Poste.findAll();
    res.status(200).json({
      message: "All agents postes success getted",
      response: response,
    });
  },
};

// Exporting module
export default posteController;
