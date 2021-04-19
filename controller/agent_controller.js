// Importing dependancies and other modules
import Agent from "../models/agent_model";
import poste from "../models/poste_model";
import { Op } from "sequelize";

const agentController = {
  // Handling get all agents endpoint
  getAgents: async (req, res) => {
    let response = await Agent.findAll({
      // where: {
      //   id: {
      //     [Op.gt]: 1,
      //   },
      // },
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
    let _response = await Agent.findOne({
      where: {
        id: _id,
      },
      include: poste,
    }).catch((err) => {
      console.error(err);
    });
    if (!_response) {
      return res.status(404).json({
        status: 404,
        error: {
          message: "Agent not found",
        },
      });
    }
    return res.status(200).json({
      status: 200,
      message: "Agent getted successfully",
      response: _response,
    });
  },

  // Handling get request for agent by name
  getAgentByName: async (req, res) => {
    let _response = await Agent.findOne({
      where: { nom: req.params.name },
      include: poste,
    }).catch((err) => console.error(err));
    if (!_response) {
      return res.status(200).json({
        status: 404,
        error: {
          message: "Agent not found",
        },
      });
    }

    res.status(200).json({
      status: 200,
      message: "User getted successfully",
      response: _response,
    });
  },
};

export default agentController;
