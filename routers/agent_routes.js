import express from "express";
import agentController from "../controller/agent_controller";

const router = express.Router();

router
  .get("/all", agentController.getAgents)
  .get("/one/:id", agentController.getOneAgent);

export default router;
