// Import dependancies
import express from "express";
import articleCtrl from "../controller/article_ctrl";
const router = express.Router();

router.get("/", articleCtrl.getArticles).post("/add", articleCtrl.addArticles);

// Exporting module
export default router;
