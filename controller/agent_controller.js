// Importing dependancies and other modules
import Agent from "../models/agent_model";
import poste from "../models/poste_model";
import { Op } from "sequelize";

// Building agent controller
const agent = {
  // Function for getting all agents
  getAgents: async (req, res) => {
    let response = await Agent.findAll({
      where : {
        id : {
          [Op.and]:{
            [Op.eq]:1,
            [Op.gt]:0
          }
        }
      },
      include : poste
    });
    res.status(200).json({
      status: 200,
      message: "Success getted oooooo",
      response: {
        data: response,
      },
    });
  },
};

// Exporting module
export default agent;
