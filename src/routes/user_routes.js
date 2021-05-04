// Importing dependencies
import express from "express";
import userCtrl from "../controller/user_controller";
import checkAuth from "../middleware/token";
import userValidation from "../middleware/user_validate";

// Declaring variables
const router = express.Router();

// All user routers
router
  .get("/all", checkAuth, userCtrl.getUsers)
  .get("/one/:id", checkAuth, userCtrl.getOneUser)
  .post("/login", userValidation.userValidate, userCtrl.loginUser)
  .post("/signup", userValidation.userValidate, userCtrl.signup)
  .put("/:id", checkAuth, userCtrl.updateUser)
  .delete("/:id", checkAuth, userCtrl.deleteUser);

  // Exporting module
export default router;
