// Importing dependencies
import Joi from "joi";

// user validation
const userValidation = {
  validateUser: (req, res, next) => {
    let schema = Joi.object({
      nom: Joi.string().min(5).required(),
      mot_de_passe: Joi.string().min(5).required(),
      contact: Joi.string().min(10).max(15).required(),
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

// Exporting module
export default userValidation;
