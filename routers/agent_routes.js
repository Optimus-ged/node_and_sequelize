import express from "express";
import agentController from "../controller/agent_controller";

const router = express.Router();

router
  .get("/all", agentController.getAgents)
  .get("/one/:id", agentController.getOneAgent)
  .get("/name/:name", agentController.getAgentByName);

export default router;
