import express from "express";
import agentController from "../controller/agent_controller";

const router = express.Router();

router.use("/", agentController.getAgents);