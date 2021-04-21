// Importing dependancies and other modules
import Agent from "../models/agent_model";
import Poste from "../models/poste_model";
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
      include: Poste,
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
    let id = isNaN(parseInt(req.params.id)) ? 0 : parseInt(req.params.id);
    let response = await Agent.findOne({
      where: {
        id: id,
      },
      include: Poste,
    }).catch((err) => {
      console.error(err);
    });
    if (!response) {
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
      response: response,
    });
  },

  // Handling get request for agent by name
  getAgentByName: async (req, res) => {
    let response = await Agent.findOne({
      where: { nom: req.params.name },
      include: Poste,
    }).catch((err) => console.error(err));
    if (!response) {
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
      response: response,
    });
  },

  // Handling post request for one agent
  addAgent: async (req, res) => {
    let body = req.body;

    let posteExist = await Poste.findOne({
      where: {
        designation: body.designation,
      },
    });

    if (!posteExist) {
      return res.status(404).json({
        status: 404,
        error: {
          message: "This poste agent doesn't exist",
        },
      });
    }

    let createData = {
      nom: body.nom,
      prenom: body.prenom,
      postnom: body.postnom,
      sexe: body.sexe,
      date_naissance: body.date_naissance,
      poste_id: posteExist.id,
      photo: body.photo,
    };

    let data = await Agent.create(createData).catch((err) =>
      console.error(err)
    );

    if (!data) {
      return res.status(404).json({
        status: 404,
        error: {
          message: "Agent not created",
        },
      });
    }

    res.status(201).json({
      status: 201,
      message: "Agent created successfully",
    });
  },
};

export default agentController;
