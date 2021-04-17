import express from "express";
import agentController from "../controller/agent_controller";

const router = express.Router();

router
  .get("/", agentController.getAgents)
  .get("/:id", agentController.getOneAgent);

export default router;
