// Importing modules and dependnacies
import posteController from "../controller/poste_controller";
import express from "express";
const router = express.Router();

router
  .get("/", posteController.getPostes)
  // .get("/:id", posteController.getOnePoste);

export default router;
