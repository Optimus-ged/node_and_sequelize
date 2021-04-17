// Importing dependancies and other modules
import Agent from "../models/agent_model";
import poste from "../models/poste_model";
import { Op } from "sequelize";

const agentController = {
  // Handling get all agents endpoint
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

  // Handling get one agent end-point
  getOneAgent: async (req, res) => {
    let _id = isNaN(parseInt(req.params.id)) ? 0 : parseInt(req.params.id);
    let response = await Agent.findOne({
      where: {
        id: _id,
      },
    }).catch((err) => {
      console.error(err);
    });
    if (!response) {
      return res.status(404).json({
        status: 404,
        error: {
          message: "User not found",
        },
      });
    }
    return res.status(200).json({
      status: 200,
      message: "User getted successfully",
      response: response,
    });
  },
};

export default agentController;
