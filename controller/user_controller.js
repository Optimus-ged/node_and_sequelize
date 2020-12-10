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
                message: 'Product not found'
            }
        });
    },

    // Comment
    // Creating a user
    addUser: async (req, res) => {
        // Comment
        // Let's first crypt the pwd before post to the database
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
            if (err) {
                return res.status(500).json({
                    error: {
                        message: err.message
                    }
                });
            }
            // Comment
            // let's now create the data
            let response = await User.create({
                email: req.body.email,
                password: hash
            }).then().catch(err => {
                console.error(err);
                res.status(500).json({
                    error: {
                        message: err.message
                    }
                })
            });
            if (response) {
                return res.status(201).json({
                    status: 201,
                    message: 'Successfully created',
                    user_created: response
                });
            }
            res.status(401).json({
                error: {
                    message: 'User not created'
                }
            });
        });
    },

    // Comment
    // Login for user
    loginUser: async (req, res) => {
        let response = await User.findOne({
            where: {
                email: req.body.email
            }
        }).then().catch(err => { console.error(err); });

        if (response) {
            let verified = await bcrypt.compare(req.body.password, response.password);
            if (verified) {
                const token = jwt.sign(
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
                message: 'Product not found'
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
                    message: 'Product Updated Successfully'
                });
            } else {
                res.status(500).json({
                    status: 500,
                    message: 'Product Not updated'
                });
            }
        }
    }
};

// Comment
// Exporting module
export default userController;