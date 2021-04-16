// Importing dependancies and other modules
import Agent from "../models/agent_model";

// Building agent controller
const agent = {
  // Function for getting all agents
  getAgents: async (req, res) => {
    let response = await Agent.findAll();
    res.status(200).json({
      status: 200,
      message: "Success getted",
      response: {
        data: response,
      },
    });
  },
};

// Exporting module
export default agent;
