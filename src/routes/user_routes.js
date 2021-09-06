// Importing dependencies
import express from "express";
import userCtrl from "../controller/user_ctrl";
import checkAuth from "../middleware/token";
import userValidation from "../middleware/user_validation";
import uploadFile from "../middleware/upload";

// Declaring variables
const router = express.Router();

// All user routers
router
  .get("/all", checkAuth, userCtrl.getUsers)
  .get("/one/:id", checkAuth, userCtrl.getOneUser)
  .post("/signin",  userCtrl.loginUser)
  .post(
    "/signup",
    // userValidation.validateUser,
    uploadFile.single("photo"),
    userCtrl.signup
  )
  .put("/:id", userValidation.validateUser, checkAuth, userCtrl.updateUser)
  .delete("/:id", checkAuth, userCtrl.deleteUser);

// Exporting module
export default router;
