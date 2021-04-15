// Import dependancies
import express from 'express';
import posteController from "../controller/poste_controller";

// Declaring variables
const router = express();

// Defining all routes
router
.get("/", posteController.getPosts);

// Export module
export default router;