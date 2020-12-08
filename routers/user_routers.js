// Comment
// Importing dependencies
import express from 'express';
import productController from '../controller/user_controller';

// Comment
// Declaring variables
const router = express.Router();

// Comment
// All user routers
router
    .get('/', productController.getUsers)
    .get('/:id', productController.getOneUser)


// Comment
// Exporting module
export default router;
