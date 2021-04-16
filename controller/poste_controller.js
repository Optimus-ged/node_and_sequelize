// Import model
import Poste from "../models/poste_model";
import agent from "../models/agent_model";
import { Op } from "sequelize";

// Building components for all operations
const posteController = {
  // Getting all data from poste table
  getPosts: async (req, res) => {
    let response = await Poste.findAll({
      where: {
        id: {
          [Op.eq]: 2,
        },
      },
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
