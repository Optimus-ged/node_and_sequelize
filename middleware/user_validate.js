// Comment
// Import dependancy
import Joi from 'joi';

// Comment
// User validation
const UserValidation = {
    UserValidate = async (req, res, next)=> {
        let schema = Joi.object({
            email : Joi.string().min(5).required(),
            password : Joi.string().min(5).required()
        });
        const {error} = schema.validate(req.body);
        if(error){
            return res.status(500).json({
                status : 500,
                message : error.details[0].message
            });
        }
        next();
    }
};

// Comment
// Exporting module
export default UserValidation;