import express from "express";
import checkAuth from "../middleware/token";
import agentController from "../controller/agent_controller";
const router = express.Router();

router
  .get("/", checkAuth, agentController.getAgents)
  .get("/:id", checkAuth, agentController.getOneAgent)
  .get("/agent_by_name/:name", checkAuth, agentController.getAgentByName)
  .post("/add", checkAuth, agentController.addAgent);

export default router;
