// Comment
// Import dependencies
import Product from '../models/products';

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
            products: response
        });
    },

    // Comment
    // add-products controller
    addProduct: async (req, res) => {
        let data = {
            name: req.body.name,
            price: NaN(parseFloat(req.body.price)) ? 0 : parseFloat(req.body.price)
        };
        let response = await Product.create({
            name: data.name,
            price: data.price
        }).then().catch(err => {
            console.log(err);
            res.status(500).json({
                error: {
                    message: err.message
                }
            });
        });
        if (response) {
            return res.status(200).json({
                message: 'Sucessfully created',
                data: response
            });
        }
        res.status(500).json({
            error: {
                message: 'Not created'
            }
        });
    },
};

export default productController;
