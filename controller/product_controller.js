// Comment
// Import dependencies
import Product from '../models/product_model';

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
        let response = await Product.findOne({
            where: id
        })
            .then().catch(err => {
                console.error(err);
            });
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
    // update ad product
    updateProduct: async (req, res) => {
        const id = isNaN(parseInt(req.params.id)) ? 0 : parseInt(req.params.id);
        const response = await Product.findOne({ where: { id: id } });
        if (!response) {
            return res.status(404).json({
                error: {
                    message: 'Product doesn\'t exist'
                }
            });
        }
        if (response) {
            const updated = await Product.update(

                {name : req.body.name},

                { where: { id: id } }).then().catch(err => {
                    console.error(err);
                    res.status(500).json({
                        error: {
                            status: 500,
                            message: err.message
                        }
                    });
                });
            if (updated[0] != 0) {
                console.log(updated);
                res.status(200).json({
                    status: 200,
                    message: 'Success updated',
                });
            } else {
                return res.status(404).json({
                    error: {
                        message: 'Product Not Updated'
                    }
                });
            }
        }
    }
};

// Comment
// Exporting module
export default productController;
