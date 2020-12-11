// Comment
// Import dependencies
import Product from '../models/product_model';
import Joi from 'joi';

// Comment
// The product controller
const productController = {
    // Comment
    // Get-all products controller
    getProducts: async (req, res) => {
        let response = await Product.findAll().then().catch(err => {
            console.log(err);
            res.status(500).json({
                error: {
                    message: err.message
                }
            });
        });
        res.status(200).json({
            status: 200,
            message: 'All products successfully getted',
            count: response.length,
            products: response
        });
    },

    // Comment
    // Get product by id controller
    getOneProduit: async (req, res) => {
        let id = isNaN(parseInt(req.params.id)) ? 0 : parseInt(req.params.id);
        let response = await Product.findOne({ where: id })
        if (response) {
            return res.status(200).json({
                status: 200,
                message: 'Product successfully getted',
                product: response
            });
        }
        res.status(401).json({
            error: {
                message: 'product not found'
            }
        });
    },

    // Comment
    // add product
    addProduct: async (req, res) => {
        let data = {
            name: req.body.name,
            price: isNaN(parseFloat(req.body.price)) ? 0 : parseFloat(req.body.price)
        };
        let response = await Product.create({
            name: data.name,
            price: data.price
        }).then().catch(err => console.error(err));
        if (response) {
            return res.status(201).json({
                status: 201,
                message: 'Product Successfully created',
                response: response
            })
        }
        res.status(500).json({
            error: {
                message: 'Not created'
            }
        });
    },

    // Comment
    // Update a product
    updateProduct: async (req, res) => {
        let _id = isNaN(parseInt(req.params.id)) ? 0 : parseInt(req.params.id);
        let response = await Product.findOne({ where: { id: _id } });
        if (!response) {
            res.status(404).json({
                status: 404,
                message: 'Product not found',
            });
        }
        if (response) {
            let updated = await Product.update(
                {
                    name: req.body.name,
                    price: req.body.price
                },
                { where: { id: _id } }
            );
            if (updated[0] != 0) {
                res.status(200).json({
                    status: 200,
                    message: 'Product updated succesfully'
                });
            } else {
                res.status(500).json({
                    status: 500,
                    message: 'Product not updated'
                });
            }
        }
    },

    // Comment
    // Delete a product
    deleteProduct: async (req, res) => {
        let _id = isNaN(parseInt(req.params.id)) ? 0 : parseInt(req.params.id);
        let response = await Product.findOne({ where: { id: _id } });
        if (!response) {
            res.status(404).json({
                status: 404,
                message: 'Product does not exist'
            });
        } else {
            await Product.destroy({ where: { id: _id } });
            res.status(200).json({
                status: 200,
                data: {
                    message: 'Product deleted Successfully'
                }
            });
        }
    },
};

// Comment
// Exporting module
export default productController;
