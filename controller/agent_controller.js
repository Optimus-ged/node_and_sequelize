// Importing dependancies and other modules
import Agent from "../models/agent_model";

const agentController = {
  getAgents: async (req, res) => {
    let response = Agent.findAll().catch((err) => {
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
