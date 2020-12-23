// Comment
// Importing dependencies
import User from '../models/user_model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Comment
// Config dotenv
dotenv.config();

// Comment
// User Controller 
const userController = {
    // Comment
    // get-request for all users
    getUsers: async (req, res) => {
        let response = await User.findAll().then().catch(
            err => {
                console.err(err);
                res.status(500).json({
                    error: {
                        message: err.message
                    }
                });
            }
        );
        res.status(200).json({
            status: 200,
            count: response.length,
            users: response
        });
    },

    // Comment
    // Handling get-request for one user
    getOneUser: async (req, res) => {
        let id = isNaN(parseInt(req.params.id)) ? 0 : parseInt(req.params.id);
        let response = await User.findOne({ where: id }).then().catch(err => {
            console.error(err);
            res.status(500).json({
                error: {
                    message: err.message
                }
            });
        });
        if (response) {
            return res.status(200).json({
                status: 200,
                user: response
            });
        }
        res.status(404).json({
            error: {
                status: 404,
                message: 'User not found'
            }
        });
    },

    // Comment
    // Add user sign up
    signup: async (req, res) => {
        let emailExist = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (emailExist) {
            return res.status(500).json({
                error: {
                    status: 500,
                    message: 'The email you are using is already used'
                }
            });
        } else {
            let cryptedPwd = await bcrypt.hash(req.body.password, 10);
            let response = await User.create({
                email: req.body.email,
                password: cryptedPwd
            }).catch(err => {
                console.log(err);
                res.status(500).json({
                    error: {
                        status: 500,
                        message: err.message
                    }
                });
            });

            if (response) {
                res.status(201).json({
                    status: 201,
                    message: 'User created successfully',
                    response: response
                });
            }
        }
    },

    // Comment
    // Login for user
    loginUser: async (req, res) => {
        let response = await User.findOne({
            where: {
                email: req.body.email
            }
        }).catch(err => { console.error(err); });

        if (response) {
            let verified = await bcrypt.compare(req.body.password, response.password);
            if (verified) {
                let token = jwt.sign(
                    { email: response.email, id: response.id },
                    process.env.JWT_KEY,
                    { expiresIn: process.env.EXPIRE_TOKEN }
                );
                return res.status(200).json({
                    status: 200,
                    message: 'Authentification success',
                    token: token
                });
            }
            res.status(409).json({
                error: {
                    status: 409,
                    message: 'Authentification failed'
                }
            });
        };
        res.status(404).json({
            error: {
                message: 'Authentification failed please check your email'
            }
        });
    },

    // Comment
    // Update data for users
    updateUser: async (req, res) => {
        let _id = isNaN(parseInt(req.params.id)) ? 0 : parseInt(req.params.id);
        let response = await User.findOne({ where: { id: _id } });
        if (!response) {
            res.status(404).json({
                status: 404,
                message: 'User not found'
            });
        }
        if (response) {
            let updated = await User.update(
                { email: req.body.email },
                { where: { id: _id } }
            );
            if (updated[0] != 0) {
                res.status(200).json({
                    status: 200,
                    message: 'User Updated Successfully'
                });
            } else {
                res.status(500).json({
                    status: 500,
                    message: 'User Not updated'
                });
            }
        }
    },

    // Comment
    // Delete a User
    deleteUser: async (req, res) => {
        let _id = isNaN(parseInt(req.params.id)) ? 0 : parseInt(req.params.id);
        let response = await User.findOne({ where: { id: _id } });
        if (!response) {
            return res.status(404).json({
                status: 404,
                message: 'User not found'
            })
        }
        if (response) {
            await User.destroy({ where: { id: _id } });
            res.status(200).json({
                status: 200,
                message: 'User Deleted successfully'
            });
        } else {
            res.status(500).json({
                status: 500,
                message: 'User not deleted'
            });
        }
    },
};

// Comment
// Exporting module
export default userController;