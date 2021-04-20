// Importing dependancies and other modules
import Agent from "../models/agent_model";
import Poste from "../models/poste_model";
import { Op } from "sequelize";

const agentController = {
  // Handling get all agents endpoint
  getAgents: async (req, res) => {
    let _response = await Agent.findAll({
      // where: {
      //   id: {
      //     [Op.gt]: 1,
      //   },
      // },
      include: Poste,
    }).catch((err) => {
      console.error(err);
    });

    if (_response) {
      return res.status(200).json({
        status: 200,
        message: "All agents getted successfully",
        length: _response.length,
        response: _response,
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
      include: Poste,
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
      include: Poste,
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

  // Handling post request for one agent
  addAgent: async (req, res) => {
    let _body = req.body;
    let _posteExist = await Poste.findOne({
      where: {
        designation: _body.designation,
      },
    });

    if(!_posteExist){
      return res.status(404).json({
        status: 404,
        error: {
          message: "This poste agent doesn't exist",
        },
      });
    }

    let _data = await Agent.create({
      nom: _body.nom,
      prenom: _body.prenom,
      postnom: _body.postnom,
      sexe: _body.sexe,
      date_naissance : _body.date_naissance,
      poste_id : _posteExist.id,
      photo : _body.photo
    }).catch(err => console.error(err));

   

    if(!_data){
      return res.status(404).json({
        status : 404,
        error : {
          message : "Agent not created"
        }
      });
    }

    res.status(201).json({
      status: 201,
      message: "Agent created successfully",
      response: {
        nom: _data.nom,
        prenom: _data.prenom,
        postnom: _data.postnom,
        sexe: _data.sexe,
        date_naissance: _data.date_naissance,
        poste: _posteExist.designation,
        photo: _data.photo,
      },
    });
  },
};

export default agentController;
