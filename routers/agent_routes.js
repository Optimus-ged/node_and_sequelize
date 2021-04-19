import express from "express";
import agentController from "../controller/agent_controller";
const router = express.Router();

router
  .get("/", agentController.getAgents)
  .get("/:id", agentController.getOneAgent)
  .get("/agent_by_name/:name", agentController.getAgentByName);

export default router;
