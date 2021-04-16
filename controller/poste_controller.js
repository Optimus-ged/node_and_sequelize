import Poste from "../models/poste_model";

const posteController = {
  // Handling get-request for all postes
  getPostes: async (req, res) => {
    let response = await Poste.findAll().catch((err) => {
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
        message : "All Messages getted successfully",
        length: response.length,
        response: response,
      });
    }
  },
};

export default posteController;
