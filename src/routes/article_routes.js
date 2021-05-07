// Import dependancies
import express from "express";
import articleCtrl from "../controller/article_ctrl";
const router = express.router();

router.get("/", articleCtrl.getAgents);

// Exporting module
export default router;