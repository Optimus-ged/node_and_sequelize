// Importing dependancies
import express from "express";
import photoArtCtrl from "../controller/photo_art_ctrl";
const router = express.Router();

// Building routes
router.get("/", photoArtCtrl.getPhotosArt).post("/add", photoArtCtrl.addPhotoArt);

// Exporting module
export default router;