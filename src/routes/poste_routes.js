// Importing modules and dependnacies
import express from "express";
import checkAuth from "../middleware/token";
import posteCtrl from "../controller/poste_ctrl";

const router = express.Router();

router
  .get("/", checkAuth, posteCtrl.getPostes)
  .get("/:id", checkAuth, posteCtrl.getOnePoste)
  .get("/poste_by_desi/:desi", checkAuth, posteCtrl.getPostByName)
  .post("/add",  posteCtrl.addPoste);

export default router;
