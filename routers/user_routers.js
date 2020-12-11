// Comment
// Importing dependencies
import express from 'express';
import userController from '../controller/user_controller';
import checkAuth from '../middleware/token';
import userValidation from '../middleware/user_validate';

// Comment
// Declaring variables
const router = express.Router();

// Comment
// All user routers
router
    .get('/', checkAuth, userController.getUsers)
    .get('/:id', checkAuth, userController.getOneUser)
    .post('/login', userController.loginUser)
    .post('/signup', userValidation.userValidate, checkAuth, userController.addUser)
    .put('/:id', checkAuth, userController.updateUser)
    .delete('/:id',checkAuth, userController.deleteUser)
// Comment
// Exporting module
export default router;
