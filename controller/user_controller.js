// Comment
// Importing dependencies
import User from '../models/user_model';
import bcrypt from 'bcrypt';

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
        })
            .then()
            .catch(err => {
                console.error(err);
                res.status(500).json({
                    error: {
                        message: err.message
                    }
                });
            });
        if (!response) {
            res.status(404).json({
                error: {
                    message: 'Address email doesn\'t exist'
                }
            });
        }
        if (response) {
            return bcrypt.compare(req.body.password, response.password, (err, verified) => {
                if (err) {
                    return res.status(409).json({
                        error: {
                            status: 409,
                            message: 'Authentification failed'
                        }
                    });
                }
                if (verified) {
                    return res.status(200).json({
                        status: 200,
                        message: 'Authentification success'
                    });
                }
                return res.status(409).json({
                    error: {
                        status: 409,
                        message: 'Authentification failed'
                    }
                });
            });
        }
    },
};

// Comment
// Exporting module
export default userController;