// Comment
// Importing dependencies
import User from '../models/user_model';

// Comment
// User Controller 
const userController = {
    // Comment
    // get-request for all users
    getUsers: async (req, res) => {
        let response = await User.find().then().catch(
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
            status : 200,
            count : response.length,
            users : response
        });
    },
};

// Comment
// Exporting module
export default userController;