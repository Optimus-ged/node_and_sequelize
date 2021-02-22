// Comment
// Importing dependencies
import Joi from "joi";

// Comment
// user validation
const userValidation = {
  userValidate: async (req, res, next) => {
    let schema = Joi.object({
      email: Joi.string().min(5).required(),
      password: Joi.string().min(5).required(),
    });
    let { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        status: 400,
        message: error.details[0].message,
      });
    }
    next();
  },
};

// Comment
// Exporting module
export default userValidation;
