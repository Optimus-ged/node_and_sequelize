// Comment
// Importing dependencies
import Joi from 'joi';

// Comment
// Defining validations
const productValidation = {
    addProduct: async (req, res, next) => {
        console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT');
        let schema = Joi.object({
            name: Joi.string().min(5).max(50).required(),
            price: Joi.number().precision(2).required()
        });
        let { err } = schema.validate(req.body);
        console.log(schema);
        if (err) {
            return res.status(400).json({
                status: 400,
                message: 'Bad request, please check data before send'
            });
        }
        next();
    }
};



// Comment
// Exporting module
export default productValidation;