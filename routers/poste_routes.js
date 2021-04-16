import express from "express";
import posteController from "../controller/poste_controller";
const router = express.Router();

router.use("/", posteController.getPostes);