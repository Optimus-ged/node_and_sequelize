import Poste from "../models/poste_model";
import agent from "../models/agent_model";
import { Op } from "sequelize";

const posteController = {
  // Handling get-request for all postes
  getPostes: async (req, res) => {
    let response = await Poste.findAll({
      where: {
        id: {
          [Op.and]: {
            [Op.eq]: 1,
            [Op.gt]: 0,
          },
        },
      },
      include: agent,
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
        message: "All postes getted successfully",
        length: response.length,
        response: response,
      });
    }
  },
};

export default posteController;
