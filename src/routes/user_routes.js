// Importing dependencies
import express from "express";
import userCtrl from "../controller/user_ctrl";
import checkAuth from "../middleware/token";
import userValidation from "../middleware/user_validate";
import uploadFile from "../middleware/upload";

// Declaring variables
const router = express.Router();

// All user routers
router
  .get("/all", checkAuth, userCtrl.getUsers)
  .get("/one/:id", checkAuth, userCtrl.getOneUser)
  .post("/login", userCtrl.loginUser)
  .post("/signup", uploadFile.single("photo"), userCtrl.signup)
  .put("/:id", checkAuth, userCtrl.updateUser)
  .delete("/:id", checkAuth, userCtrl.deleteUser);

// Exporting module
export default router;
