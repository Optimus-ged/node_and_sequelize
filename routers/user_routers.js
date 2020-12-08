// Comment
// Importing dependencies
import express from 'express';
import userController from '../controller/user_controller';

// Comment
// Declaring variables
const router = express.Router();

// Comment
// All user routers
router
    .get('/', userController.getUsers)
    .get('/:id', userController.getOneUser)
    .post('/', userController.addUser)


// Comment
// Exporting module
export default router;
