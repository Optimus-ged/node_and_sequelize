// Importing dependancies and other modules
import express from "express";
import agentController from "../controller/agent_controller";

// Declaring the router
const router = express.Router();

// Defining all endpoints
router.get("/", agentController.getAgents);

// Exporting module
export default router;