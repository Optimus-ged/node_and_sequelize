// Importing dependancies and other modules
import Agent from "../models/agent_model";
import poste from "../models/poste_model";
import { Op } from "sequelize";

const agentController = {
  getAgents: async (req, res) => {
    let response = await Agent.findAll({
      where: {
        id: {
          [Op.gt]: 1,
        },
      },
      include: poste,
    }).catch((err) => {
      console.error(err);
      res.status(500).json({
        status: 500,
        error: {
          message: err.message,
        },
      });
    });

    if (response) {
      return res.status(200).json({
        status: 200,
        message: "All agents getted successfully",
        length: response.length,
        response: response,
      });
    }
  },
};

export default agentController;
