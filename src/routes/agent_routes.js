import express from "express";
import checkAuth from "../middleware/token";
import agentCtrl from "../controller/agent_ctrl";
import uploadFile from "../middleware/upload";

const router = express.Router();

router
  .get("/", checkAuth, agentCtrl.getAgents)
  .get("/:id", checkAuth, agentCtrl.getOneAgent)
  .get("/agent_by_name/:name", checkAuth, agentCtrl.getAgentByName)
  .post("/add",  uploadFile.single("photo"), agentCtrl.addAgent);

export default router;
