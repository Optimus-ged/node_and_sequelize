// Importing modules and dependnacies
import express from "express";
import checkAuth from "../middleware/token";
import posteController from "../controller/poste_controller";

const router = express.Router();

router
  .get("/", checkAuth, posteController.getPostes)
  .get("/:id", checkAuth, posteController.getOnePoste)
  .get("/poste_by_desi/:desi", checkAuth, posteController.getPostByName)
  .post("/add", checkAuth, posteController.addPoste);

export default router;
