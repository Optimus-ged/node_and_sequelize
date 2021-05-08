// Importing dependancies
import express from "express";
import photoArtCtrl from "../controller/photo_art_ctrl";
import uploadFile from "../middleware/upload";
const router = express.Router();

// Building routes
router
  .get("/", photoArtCtrl.getPhotosArt)
  .post("/add", uploadFile.single("photo"), photoArtCtrl.addPhotoArt);

// Exporting module
export default router;
