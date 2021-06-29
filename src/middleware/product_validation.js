// Importing dependencies
import Joi from "joi";

// Product validation with joi dependency
const productvalidation = {
  validatedProduct: (req, res, next) => {
    let schema = Joi.object({
      name: Joi.string().min(6).max(50).required(),
      price: Joi.number().precision(2).required(),
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

// Exporting modules
export default productvalidation;
